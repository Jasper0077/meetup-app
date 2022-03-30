# Meetup App

The MERN stack web application, without the "E" (Express.js), used Next.js for API calls instead.

# Getting Started

You can `git clone` this project by using,

```git
git clone https://github.com/Jasper0077
```

After that, you can install the dependencies

```node
npm i
```

You might need to setup your own Mongodb database either locally or via Cloud, provided the `.env.example` file for reference if you plan to use remote database on MongoDB Cloud.

Lastly, you can run in `localhost` with

```node
npm run dev
```

# MongoDB Configuration

```
DB_URL=mongodb+srv://<user>:<password>@<cluster>/<database>?retryWrites=true&w=majority
```

- `<user>`: replace with your database username
- `<password>`: replace with the password of the user above
- `<cluster>`: your database instance
- `<database>`: your database name

If you are not sure which credential to enter, please refer to the [docs](https://www.mongodb.com/docs/atlas/troubleshoot-connection/).