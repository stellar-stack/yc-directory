import Image from "next/image";
import SearchForm from "@/components/SearchForm";
import { auth } from "@/auth";
import StartupCard from "@/components/StartupCard";

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {

  const query = (await searchParams).query;

  const posts = [{
    _createdAt: new Date(),
    views: 55,
    author: { _id: 1, name: 'Adrian'},
    _id: 1,
    description: 'This is a description.',
    image: 'https://i.ytimg.com/vi/Mu-eK72ioDk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC9OP2Xgm5uY87uqWYKOvcDdHpeDw',

    category: "Robots",
    title: "We Robots",
  },
];

  return (
    <>

      <section className="pink_container">

        <h1 className="heading">Pitch Your Startup, <br /> Connect With Entrepreneurs</h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competition
        </p>

        <SearchForm query={query} />

      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search result for "${query}"`: 'All Startups'}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post?._id} post={post}/>
            )) 
          )  : (
            <p className="no-result">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
