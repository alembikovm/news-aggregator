## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/alembikovm/news-aggregator.git
cd news-aggregator

npm install
npm start
```

### 2. Build and Run with Docker
```bash
docker build -t react-news-app .

docker run -p 3000:3000 react-news-app
```

### For convenience, environment variables are managed through both the .env file and the Dockerfile, ensuring seamless configuration during development and deployment.