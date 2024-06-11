import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/examples/**/*',
    '!src/**/__tests__/**/*',
  ],
  verbose: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};

export default config;
