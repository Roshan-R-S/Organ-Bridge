import Layout from "../layout";

const AboutUs = () => {
  return (
    <Layout>
      <div className="m-4 md:mx-8 md:my-6">
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
            About OrganBridge
          </h1>
          <p className="text-gray-700 leading-relaxed text-justify">
            OrganBridge is a pioneering platform dedicated to streamlining the process of organ donation and transplantation. Our mission is to bridge the gap between donors and recipients, ensuring that life-saving organs reach those in need efficiently and ethically.
            <br /><br />
            We believe in transparency, speed, and compassion. Our system facilitates secure communication and coordination between medical centers, ensuring that every donation counts.
            <br /><br />
            Founded by a team of healthcare professionals and technologists, OrganBridge is committed to saving lives through innovation.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
