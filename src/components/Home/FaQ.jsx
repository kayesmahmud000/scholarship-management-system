import Heading from "../shared/Heading";

const FaQ = () => {
    return (
        <div className="my-16 mx-auto">
        <Heading title={"Frequently Asked Questions"} subtitle={"Scholarships"} />
      
        <div className="max-w-4xl my-10 mx-auto bg-white shadow-lg rounded-lg p-6" >
          <div className="collapse collapse-arrow border-b border-b-gray-400 rounded-lg mb-4">
            <input type="radio" name="faq-accordion" defaultChecked />
            <div className="collapse-title text-lg font-semibold  p-4 rounded-t-lg">
              What is the eligibility criteria for scholarships?
            </div>
            <div className="collapse-content p-4 ">
              <p>The eligibility criteria vary by scholarship. Generally, they consider academic performance, extracurricular activities, and financial need.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow border-b border-b-gray-400 rounded-lg mb-4">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-lg font-semibold  p-4">
              Can I apply for multiple scholarships simultaneously?
            </div>
            <div className="collapse-content p-4 ">
              <p>Yes, you can apply for multiple scholarships if you meet the criteria for each one. Ensure that application deadlines don't overlap.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow border-b border-b-gray-400 rounded-lg">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-lg font-semibold  p-4">
              How do I track my scholarship application status?
            </div>
            <div className="collapse-content p-4 ">
              <p>You can log into your account and navigate to the "My Applications" section to check the current status of your submissions.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow border-b border-b-gray-400 rounded-lg">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-lg font-semibold  p-4">
            What should I do if I miss the application deadline?
            </div>
            <div className="collapse-content p-4 ">
              <p>Unfortunately, late applications are not accepted. We recommend keeping track of upcoming deadlines on our website.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow border-b border-b-gray-400 rounded-lg">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-lg font-semibold  p-4">
            How do I report a technical issue?
            </div>
            <div className="collapse-content p-4 ">
              <p>Use the "Report Issue" button in your dashboard or email us at [support email].</p>
            </div>
          </div>
        </div>
      </div>
      
    );
};

export default FaQ;