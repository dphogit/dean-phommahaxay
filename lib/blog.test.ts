import fs from 'fs/promises';
import 'path';
import * as z from 'zod';

import { getBlogMetaData } from './blog';

jest.mock('fs/promises');

jest.mock('path', () => {
  const actualPath = jest.requireActual('path');
  return {
    ...actualPath,
    join: jest.fn((...args) => args.at(-1)),
  };
});

const mockedReadDir = jest.mocked<(path: string) => Promise<string[]>>(
  fs.readdir,
);

const mockedReadFile = jest.mocked(fs.readFile);

const testData = [
  {
    filename: 'auckland-marathon-2026.md',
    content: `---
title: Auckland Marathon 2026
date: '2026-11-01'
---
Content relating to the Auckland Marathon 2026.`,
  },
  {
    filename: 'gold-coast-marathon-2027.md',
    content: `---
title: London Marathon 2027
date: '2027-04-24'
slug: two-day-london-marathon-2027
---
Content relating to the two-day London Marathon 2027.`,
  },
  {
    filename: 'gold-coast-marathon-2026.md',
    content: `---
title: Gold Coast Marathon 2026
date: '2026-07-05'
slug: gold-coast-marathon-2026
---
Content relating to the Gold Coast Marathon 2026.`,
  },
  {
    filename: 'recovery-codes.txt',
    content: 'This should be filtered out as it is not a markdown file.',
  },
];

describe('getBlogMetaData', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should parse markdown files and sort them by date descending', async () => {
    // Arrange: Mock filenames and contents they would return
    mockedReadDir.mockResolvedValue(testData.map((info) => info.filename));
    mockedReadFile.mockImplementation(async (filename) => {
      const index = testData.findIndex((info) => info.filename == filename);
      if (index == -1) {
        throw Error(`${filename} not in test data.`);
      }
      return testData[index].content;
    });

    // Act
    const result = await getBlogMetaData();

    // Assert: Check date descending, mapping, and slug logic
    expect(result).toEqual([
      {
        // custom slug different from file name
        slug: 'two-day-london-marathon-2027',
        title: 'London Marathon 2027',
        date: '2027-04-24',
      },
      {
        // slug not given => falls back to file name
        slug: 'auckland-marathon-2026',
        title: 'Auckland Marathon 2026',
        date: '2026-11-01',
      },
      {
        slug: 'gold-coast-marathon-2026',
        title: 'Gold Coast Marathon 2026',
        date: '2026-07-05',
      },
    ]);
  });

  it('should throw an error when frontmatter does not follow expected schema', async () => {
    // Arrange: Mock retrieved file contents containing invalid frontmatter (missing date)
    mockedReadDir.mockResolvedValue(['london-marathon-guide.md']);
    mockedReadFile.mockImplementation(async () => {
      return `---
title: A Guide to the London Marathon
slug: london-marathon-guide
---
This is a guide to running the London Marathon!`;
    });

    // Act
    const action = () => getBlogMetaData();

    // Assert: Throws a Zod error as the required date is not in frontmatter.
    expect(action()).rejects.toThrow(z.ZodError);
  });
});
