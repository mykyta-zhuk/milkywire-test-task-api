# Milkywire test task api part
So, we have an app that should do the basic CRUD with the scalability in mind. That's why i've choose the MVP approach.

# Infrastructure
1. Isolated docker environment shipped with the code. The idea is - make it as much service oriented as possible, easier to maintain. Build instructions are separated from compose file for ultimate flexibility.
2. .env files to provide basic level of security.
3. bash scripts to build an app, migrate DB. Scripts are providing the basic setup (copying .env and config files)

# Tech stack
1. Express for an easy routing.
2. Knex for data access (i would rather go for sequelize, but i guess it's too big for an app that small, which would became even smaller at maitainance stage)
3. Jest for an unit tests (but there's no actual algos to test - just integrations, so i've skipped this part, but left the packages for futher development)

# Key desicions
1. Go for a one service instead of two (Posts service and Impacters service. Hardly reccomend to separate them)
2. Leave knex in place to save some time on migrations and seeds (still formatted them for eslint, tho)
3. Use MVC as a structural pattern. (Everybody knows MVC, saving time and money on supporting)
4. Focus on utils like config builder and sql driver. (The bussiness logic is pretty straightforward, easy to do with proper utilities, so as a senior dev i'm building utilities for the future maintainers)
5. RESTles. It's just more comfortable and flexible than RESTFul.
6. Responses based on readable codes. If we can sync responses on frontend and backend than we can write declarative-style middlewares on frontend and make the program deside which code it should run.
7. MVC as a structure, declarative programming as an implementation. (Not so much declarative-style on that, but it's my main concept of coding)

# What's missing and why

1. Transform objects to knex chains. In order to simplify the communication and data access we can transform the filters as objects into knex high order functions. Good approach, but expensive in terms of time.
2. Tests. Nothing to test.
3. Object schema validation. I know that it's kinda must, but i've skipped it to save some time. Joi is my go-to validator.
4. Sophisticated filtering and querying. It's very time consuming and based on bussiness logic, which i don't have.
