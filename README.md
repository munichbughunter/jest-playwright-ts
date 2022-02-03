# E2E Test base setup (Jest, TypeScript and Playwright)

This base setup enables you to write ui test based on Jest, TypeScript and Playwright.
Test files are held under the corresponding sub directories in `/src/__tests__/` and need to follow the filename pattern (*.)+(spec|test).[jt]s

## Prerequisite

You need a node (minimum 12.0.0) installation on your machine. 

## Configuration

### Local environment

Fill your local configuration parameters in the `.env` file.

## Execution

### Run all tests (ui)

```
yarn test
```

## Further readings

[My Blog Post](https://blog.patrick-doering.com/blog/javascript-testing-with-jest)

[Playwright Documentation](https://playwright.dev/docs/)
