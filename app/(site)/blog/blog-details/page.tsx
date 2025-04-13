import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog Details Page - Solid SaaS Boilerplate",

  // other metadata
  description: "This is Blog details page for Solid Pro"
};

const SingleBlogPage = async () => {
  return (
    <>
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
              


              <RelatedPost />
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-97/60 w-full sm:aspect-97/44">
                    <Image
                      src={"/images/blog/blog1MainImage.jpeg"}
                      alt="Kobe Steel plant that supplied"
                      fill
                      className="rounded-md object-cover object-center"
                    />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                Harnessing AI for Superior Customer Experience                </h2>

                <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
                  <li>
                    <span className="text-black dark:text-white">Author: </span>{" "}
                    Sanket Gaikwad
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Published On: July 15, 2024
                    </span>{" "}
                  </li>
              
                </ul>

                <div className="blog-details">
                  <p>
                  In today's fast-paced digital world, providing an exceptional customer experience is more important than ever. Artificial Intelligence (AI) has emerged as a game-changer, revolutionizing how businesses interact with their customers and improving overall satisfaction.


                  </p>

                  <p>
                  AI-driven chatbots and virtual assistants are transforming customer service by offering real-time support and personalized interactions. These tools can handle routine inquiries, troubleshoot issues, and provide instant solutions, reducing wait times and increasing customer satisfaction.


                  </p>

                  <h3 className="pt-8">
                  Personalizing Customer Interactions
                  </h3>

                  <div className="flex flex-wrap gap-5">
                    <Image
                      src={"/images/blog/blog1Subheading.jpeg"}
                      width={350}
                      height={200}
                      alt="image"
                    />
                  </div>
                  <p>
                  AI analyzes customer data to offer tailored recommendations and personalized marketing messages. By understanding customer preferences and behaviors, businesses can deliver targeted content and product suggestions, enhancing the overall shopping experience.
                  </p>

                  <h3 className="pt-8">
                  Predictive Analytics for Better Service
                  </h3>

                  <div className="flex flex-wrap gap-5">
                    <Image
                      src={"/images/blog/aisub.jpg"}
                      width={350}
                      height={200}
                      alt="image"
                    />
                  </div>
                  <p>
                  Predictive analytics powered by AI helps businesses anticipate customer needs and optimize service delivery. By analyzing historical data and identifying patterns, AI can forecast future trends and suggest proactive measures to improve customer engagement.

</p>
                </div>

                <h3 className="pt-8">
                Conclusion                  </h3>
                <p>
                In summary, the integration of AI into customer service has revolutionized how businesses interact with their clients, offering enhanced personalization, efficiency, and predictive capabilities. As AI technology continues to evolve, its potential to further improve customer experiences and drive business success is immense. Embracing these innovations can set your business apart in a competitive market. If you're interested in leveraging AI for your customer service needs, contact us to explore how our solutions can help you stay ahead.
</p>
                {/* <SharePost /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;
