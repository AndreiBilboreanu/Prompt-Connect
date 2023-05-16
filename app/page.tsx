import { Feed } from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">Ai-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Unleash your creativity like never before as Prompt Connect opens up a
        world of possibilities. Say goodbye to creative blocks and stagnant
        ideas—immerse yourself in a vast collection of captivating prompts
        carefully curated to inspire and challenge you.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
