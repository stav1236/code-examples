# [The #1 Mistake Developers Make with Redux and How to Fix It](https://medium.com/@stavmaor1/060ac53e24fa)

## About This Article

This article covers common mistakes developers make when using Redux. It explains the differences between server-state and client-state management, offers tips on using React Query for efficient state handling, and provides practical solutions. The code in this branch demonstrates how to integrate React Query effectively.

## Code Overview

The code provided in this branch implements an optimized approach to server-state management, focusing on React Query for data fetching. It showcases the best practices and insights shared in the article, with examples that demonstrate how to reduce unnecessary re-fetching and manage server states more efficiently.

### Key Highlights:
- Differentiating between server-state and client-state management.
- Practical examples of using React Query.
- Tips on optimizing performance by stopping common Redux mistakes.

## Link to Article

You can read the full article here: [The #1 Mistake Developers Make with Redux and How to Fix It](https://medium.com/@stavmaor1/060ac53e24fa)

## How to Run the Code

1. Clone the repository:
   ```bash
   git clone https://github.com/stav1236/code-examples.git
   ```

2. Check out the correct branch:
   ```bash
   git checkout react-query-optimizations
   ```

3. Set up and run the `media-api`:
   ```bash
   cd media-api
   npm install
   npm run dev
   ```

4. Set up and run the `recommendation-api`:
   ```bash
   cd ../recommendation-api
   npm install
   npm run dev
   ```

5. Set up and run the `client`:
   ```bash
   cd ../client
   npm install
   npm run dev
   ```
