# Sound of Cloud Music Player service
I refactored legacy code for the back end of a music player service in a full stack web application. The project uses a Redis cache and NGINX load balancer and Cassandra for the database. It was deployed via Docker on multiple AWS EC2 instances.

## Related Projects

  - https://github.com/TheJx3/suggestedTracksService
  - https://github.com/TheJx3/commentsListAndSubmissionService


## Table of Contents

1. [Description](#Description)
1. [Requirements](#Requirements)

## Description
I loaded the database with 10M primary records. Through Nginx load balancer and Redis caching, I was able to reach +1500RPS with <100ms latency.

Using loader.io and New Relic, I load tested my data and found that it could handle only about 100RPS. After additional configuration and refactoring, I was able to get to +1500 RPS. Ask me about the project!

## Requirements
### To Run This Module
From within the root directory:
npm run start

### Without Redis caching:
![noRedis](./images/noredis.png)<!-- .element height="50%" width="50%" -->
### With Redis caching:
![redis](./images/redis.png)<!-- .element height="50%" width="50%" -->
