import heroImage from "../../assets/hero.png";
import Container from "../Container/Container";
const StateSection = () => {
  return (
    <div className="flex flex-col ">
      <Container>
        <img src={heroImage} alt="hero image" />
      </Container>
      <section className="bg-linear-45 from-[#632EE3] to-[#9F62F2] text-center  text-white py-20">
        <Container>
          <h2 className="text-4xl font-bold mb-10">
            Trusted by Millions, Built for You
          </h2>
          <div className=" flex justify-evenly items-center flex-wrap flex-col sm:flex-row gap-10">
            <div className="space-y-3">
              <p>Total Downloads</p>
              <h3 className="text-5xl font-bold">29.6M</h3>
              <p>21% more than last month</p>
            </div>

            <div className="space-y-3">
              <p>Total Reviews</p>
              <h3 className="text-5xl font-bold">906K</h3>
              <p>46% more than last month</p>
            </div>

            <div className="space-y-3">
              <p>Active Apps</p>
              <h3 className="text-5xl font-bold">132+</h3>
              <p>31 more will Launch</p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default StateSection;
