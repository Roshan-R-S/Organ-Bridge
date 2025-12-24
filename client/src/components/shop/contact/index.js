import Layout from "../layout";

const ContactUs = () => {
  return (
    <Layout>
      <div className="m-4 md:mx-8 md:my-6">
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
            Contact Contact
          </h1>
          <div className="text-gray-700 leading-relaxed text-center">
            <p className="mb-4">
              We are here to assist you. Reach out to us for any inquiries or support.
            </p>
            <div className="space-y-3">
              <p>
                <span className="font-semibold">Email:</span> support@organbridge.com
              </p>
              <p>
                <span className="font-semibold">Phone:</span> +1 (555) 123-4567
              </p>
              <p>
                <span className="font-semibold">Address:</span> 123 Health Ave, Medical District, City, Country
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
