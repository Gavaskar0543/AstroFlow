
<h1 align="center">🔮 AstroFlow</h1>

<p align="center">
  <strong>Astrologer-User Connection Backend System</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-v14.17.0-green" alt="Node.js">
  <img src="https://img.shields.io/badge/Express-4.x-blue" alt="Express">
  <img src="https://img.shields.io/badge/MongoDB-4.x-green" alt="MongoDB">
</p>

## 🌟 Overview

AstroFlow is a backend system designed to efficiently manage the connection and flow distribution between users and astrologers. The system ensures fair and balanced allocation of users to astrologers while allowing flexibility for top astrologers to receive more or fewer connections as desired.

## 🛠️ Features

- **Flow Distribution Algorithm**: Fairly allocate users to astrologers, ensuring balanced connections.
- **Top Astrologer Toggle**: Adjust flow for top astrologers to manage their connection rate.
- **Concurrency Management**: Handle multiple users and astrologers concurrently.
- **Scalability**: Efficiently handle a high volume of users and astrologers.
- **Robustness**: Implement error handling and recovery mechanisms to manage failures without data loss.
- **Logging and Monitoring**: Track request handling and system performance metrics.

## 📚 Documentation

- **API Documentation**: Detailed documentation on how to interact with the backend endpoints.
- **Algorithm Explanation**: Comprehensive explanation of the flow distribution algorithm, its design principles, and usage.

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.17.0 or higher)
- MongoDB (v4.x)

### Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/your-username/astroflow.git
    cd astroflow
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Set up environment variables**:
    Create a `.env` file in the root directory and add the following:
    ```sh
    MONGO_URI=mongodb://localhost:27017/astroflow
    SECRET_KEY=your_secret_key
    ```

4. **Start the server**:
    ```sh
    npm start
    ```

## 🧪 Running Tests

1. **Install Mocha globally**:
    ```sh
    npm install -g mocha
    ```

2. **Run tests**:
    ```sh
    npm test
    ```

## 🏗️ Project Structure

```plaintext
├── models
│   ├── astrologerModel.js
│   └── userModel.js
├── services
│   └── flowDistributionService.js
├── controllers
│   └── userController.js
├── routes
│   └── userRoutes.js
├── config
│   └── logger.js
├── test
│   └── flowDistribution.test.js
├── .env
├── index.js
├── package.json
└── README.md
```

<p align="center">
  Made with ❤️ by Gavaskar kathirvel
</p>