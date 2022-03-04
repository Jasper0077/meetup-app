import { Fragment } from "react";
import Head from "next/head";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetup</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

// export async function getStaticProps() {
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//     revalidate: 10 //number of secs nextjs wait to re-render
//   };
// }

export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;

  // fetch data from an API
  const client = await MongoClient.connect(process.env.DB_URL);
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();

  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        id: meetup._id.toString(),
        image: meetup.image,
        address: meetup.address,
      })),
    },
  };
}

export default HomePage;
