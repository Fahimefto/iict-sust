import React from "react";
import Layout from "../../components/common/Layout";
import HeadingBar from "../../components/common/headingBar";

export default function index() {
  return (
    <Layout>
      <HeadingBar name="Contact Us" />
      <div className="flex flex-col lg:flex-row max-w-screen-2xl mt-5 mx-auto ">
        <div className="flex lg:w-3/4  h-1/2 lg:mx-auto ">
          <iframe
            class="w-full  aspect-video "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.4080782872265!2d91.8308429!3d24.9181645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3750ff8abc36900f%3A0xaf63c6d13271d74f!2sIICT%2C%20Shahjalal%20Univesity%20of%20Science%20and%20Technology%2C%20University%20Ave%2C%20Sylhet%203114!5e0!3m2!1sen!2sbd!4v1678469828205!5m2!1sen!2sbd"
          ></iframe>
        </div>
        <div className="flex lg:w-fullS sm:w-full  flex-col sm:mx-10 lg:mx-0 bg-gray-50 p-5 px-10">
          <div className="sm:mt-10 lg:mt-0 ">
            <h1 className="font-bold text-lg">Contact Information</h1>
            <hr className="lg:w-2/3 sm:w-1/2 border-2 border-rose-800 mb-2"></hr>
            <div>IICT Office, IICT Building</div>
            <div>iict@sust.edu</div>
            <div>01234567891</div>
            <div>www.iict.sust.edu</div>
          </div>
          <div className="">
            <h1 className="font-bold text-lg">Contact Hours</h1>
            <hr className="w-2/3 border-2 border-rose-800 mb-2"></hr>
            <h2>
              <strong>Sunday-Thursday :</strong> 9am to 5pm
            </h2>
            <h2>
              <strong>Friday-Saturday :</strong> Closed
            </h2>
          </div>
        </div>
      </div>
    </Layout>
  );
}
