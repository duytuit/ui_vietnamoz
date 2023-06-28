import { useEffect } from "react";
import Accordion from "@/components/Common/Accordion";
import { write } from "fs";
import { title } from "process";
import { get } from "http";

const Faq = () => {
  return (
    <section
      id="pricing"
      className="relative pb-[120px] pt-16 md:pt-20 lg:pt-28"
    >
      <div className="container">
        <div className="mb-8 mt-20 w-full md:mb-12 lg:mb-16">
          <h1 className="bp-h1 black dark:text-white">
            Everything you need to know about VN visas
          </h1>
          <h1 className="bp-h1 bp-h1-grey flex justify-center">
            From VietNamvisa.com Team
          </h1>
        </div>
        <div className="content-wr">
          <Accordion
            title="When should I apply for my VietNam Visa?"
            content="Ideally, you need to apply 30 to 40 days before your intended travel
            date.&nbsp;
            <div>
              <br />
            </div>
            <div>
              All VN visas are valid for 60 days from the date of its issuance.
            </div>
            <div>
              <br />
            </div>
            <div>
              <span>To start your VietNam visa application now&nbsp;</span>
              <a
                href='http://visavisa.net/'
                target='blank'
                rel='noreferrer'
              >
                click here
              </a>
              <br />
            </div>"
          />
          <Accordion
            title="I applied my visa with an airline, can you help?"
            content="This situation is just as like buying a coffee from a burger or
                pizza place and expecting it to be the coffee.
                <div>
                  <br />
                </div>
                <div>
                  An airline is good for flights, they earn money by selling
                  their flights, they are not visa experts. They will never take
                  an interest in the minute processing technicalities. Expecting
                  their seriousness on this is not their fault. No one can help
                  you once the visa application has been processed.&nbsp;
                </div>
                <div>
                  <br />
                </div>
                <div>Just wait and sip the coffee</div>"
          />
          <Accordion
            title="How do I verify my visa online?"
            content="To verify your visa online just visit:
            <div>
              <br />
            </div>
            <div>
              <a href='https://echannels.moi.gov.ae/echannels/web/client/default.html#/fileValidity'>
                https://echannels.moi.gov.ae/echannels/web/client/default.html#/fileValidity
              </a>
              <br/>
            </div>"
          />
          <Accordion
            title="How many days will it take to get the VN Visa approval?"
            content=" Normal processing takes around 3 to 4 working days.
            <div>
              <i>Express</i> service processing gets an approval within 24
              hours
            </div>
            <div>
              <span>
                <br />
              </span>
            </div>
            <div>
              <span>
                Exclusions apply: Applications made on weekends (Friday
                &amp; Saturday) and public holidays may take longer to
                process.
              </span>
              <br />
            </div>
            <div>
              <span>
                <br />
              </span>
            </div>
            <div>
              To start your VietNam visa application now&nbsp;
              <a
                href='http://visavisa.net/'
                target='blank'
                rel='noreferrer'
              >
                click here
              </a>
              <br />
            </div>"
          />
          <Accordion
            title="What is the difference between Single Entry and Multiple Entry
            VietNam Visa?"
            content="Single Entry VietNam Visa is entitled to be used for 1 entry and 1
            exit.
            <div>
              <br />
            </div>
            <div>
              Multiple Entry VietNam Visa is entitled to use for as many
              entries and exits to/from VN from any airports.
            </div>
            <div>
              <br />
            </div>
            <div>
              To start your VietNam visa application now&nbsp;
              <a
                href='http://visavisa.net/'
                target='blank'
                rel='noreferrer'
              >
                click here
              </a>
              <br />
            </div>"
          />
          <Accordion
            title="
              Can I book my ticket before applying for VietNam visa?
            "
            content="
                Yes, you can. However, its always smart to obtain your VN visa
                approval in hand before making a purchase of non-refundable
                flight tickets or hotel bookings.
                <div>
                  <br />
                </div>
                <div>
                  To start your VietNam visa application now&nbsp;
                  <a
                    href='http://visavisa.net/'
                    target='blank'
                    rel='noreferrer'
                  >
                    click here
                  </a>
                  "
          />
          <Accordion
            title="
              How can I track my VietNam Visa application status?
            "
            content="
                Just visit &nbsp;
                <a href='http://visavisa.net/track'>
                  http://visavisa.net/track
                </a>
                &nbsp;and enter your valid order reference.
                <div>
                  <br />
                </div>
                <div>
                  To start your VietNam visa application now &nbsp;
                  <a
                    href='http://visavisa.net/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    click here
                  </a>
                  "
          />
          <Accordion
            title="
              My VN visa was not approved, will I get a Refund?
            "
            content="
                Please be clear, that not a single government of any country in
                the world makes a refund to the rejected visa applications be it
                for any reason.
                <div>
                  <br />
                </div>
                <div>
                  <span>To start your VietNam visa application now </span>
                  <a
                    href='http://visavisa.net/'
                    target='blank'
                    rel='noreferrer'
                  >
                    click here
                  </a>
                  "
          />
          <Accordion
            title="
              Do infants and kids require to apply for a visa to enter into VN?
            "
            content="
                All travelers (of any age) non-VN citizen or GCC nationals will
                require a VN visa to enter the VN.
                "
          />
          <Accordion
            title="
              Can I travel to Abu Dhabi with my VietNam Visa?
            "
            content="
                Yes, you can travel to Abu Dhabi, VietNam, Sharjah, Ajman, Umm Al
                Quwain, Ras Al Khaimah or even to Fujairah with your VietNam visa.
                <div>
                  <br />
                </div>
                <div>
                  <span>To start your VietNam visa application now&nbsp;</span>
                  <a
                    href='http://visavisa.net/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    click here
                  </a>
                  "
          />
          <Accordion
            title="
              My Visa is approved, but I changed my mind to travel, can I get a
              refund?
            "
            content="
                As per VN immigration rule, there are
                <b>
                  <u>NO REFUNDS</u>
                </b>
                for any visa application that has been processed regardless it
                is approved or rejected.
                "
          />
          <Accordion
            title="
              Is it necessary for me to obtain a VN visa to enter VietNam?
            "
            content="
                <div >
                  <span>
                    VN Visa is mandatory for all non-VN citizens to travel to
                    the VN. It does not apply to the citizens of the GCC
                    nations, such as Saudi Arabia, Bahrain, Qatar, Kuwait, and
                    Oman.
                  </span>
                </div>
                <br />
                <div>
                  <div>
                    <span>
                      <br />
                    </span>
                  </div>
                </div>
                <div>
                  To start your VietNam visa application now&nbsp;
                  <a
                    href='http://visavisa.net/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span>click here</span>
                  </a>
                  <div>
                    <span>
                      <br />
                    </span>
                  </div>
                </div>
                "
          />
          <Accordion
            title="
              Can I take a flight with any airline?
            "
            content="
                Yes, our VN visas have no such restrictions. The applicant can
                travel with any airline they like.
             "
          />
          <Accordion
            title="
              I dont have scanned copy of documents?
            "
            content="
                No problem, you can take snaps from the mobile phone of your
                passport (make sure there are no flashes or cropping of the
                barcodes). The picture of the applicant can also be taken on a
                plain wall (make sure you are not wearing any hats or caps or
                sunglasses).
                <div>
                  <br />
                </div>
                <div>
                  As long as the documents are clear and readable, you are good
                  to go.
                </div>
             "
          />
          <Accordion
            title="
              My visa is approved, but they are asking for more money?
            "
            content="
                If youve clicked this, our sympathies are with you.&nbsp;
                <br />
                <div>
                  You are just another victim that fell in their trap. Only if a
                  little effort of online research was done all this could have
                  been avoided.
                </div>
                <br />
                <div>
                  No dear, no one can help you at this time. You are just too
                  late to look for the right help now!
                  <br />
                </div>
                <br />
                <div>
                  At VietNamvisa.com we have a very strict policy of transparency.
                  We will never ask for extra money.
                </div>
            "
          />
          <Accordion
            title="
              Do I need to submit Flight Ticket and Hotel booking for my VietNam
              Visa approval?
            "
            content="
                No, flight tickets and hotel bookings are not required for your
                VN visa approval.
                <br />
                <div>
                  To start your VietNam visa application now&nbsp;
                  <a
                    href='http://visavisa.net/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    click here
                  </a>
                </div>
             "
          />
          <Accordion
            title="
              Can I get VietNam Visa approval within 12 hours?
            "
            content="
                Yes, you can just&nbsp;
                <a
                  href='https://api.whatsapp.com/send?phone=971504378472'
                  target='_blank'
                  rel='noreferrer'
                >
                  click here
                </a>
                &nbsp;to know more about it
             "
          />
          <Accordion
            title="
              I will be on transit to VietNam, will I need a VietNam Visa?
            "
            content="
                Yes, you will need a VietNam visa if you will be going out of the
                airport.
            "
          />
          <Accordion
            title="
              I am a Travel agent can I have contracted agency rates?
            "
            content="
                Yes, you will need to write to us at sales@VietNamvisa.com
                <br />
                <div>A corporate salesperson will attend to you.</div>
            "
          />
          <Accordion
            title="
              GCC residents needs to apply VietNam Visa?
            "
            content="
                <span>As of 29 April 2016,&nbsp;</span>
                <span>GCC residence permit holders</span>
                <span>
                  &nbsp;will need to apply for a VN visa before arriving in
                  VietNam.
                </span>
            "
          />
          <Accordion
            title="
              How can I trust VietNamvisa.com?
            "
            content="
                The concern is valid for any online buyer. However,
                VietNamvisa.com is backed by a legally registered entity World
                Tours LLC since 2009 and is physically based in the heart of
                VietNam.
                <div>
                  <br />
                </div>
                <div>
                  You may want to send your friends or relatives to our office
                  to confirm that&nbsp;
                  <b>
                    <u>we are not a virtual online company</u>
                  </b>
                  like many other websites that are not even based in VN, that
                  will take your order and will not reply back or will hold your
                  visa for a ransom.
                </div>
                <div>
                  <br />
                </div>
                <div>
                  VietNamvisa.com is the name you can trust.&nbsp;
                  <a
                    href='https://www.trustpilot.com/review/www.VietNamvisa.com'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Click here
                  </a>
                  &nbsp;to know what our customers say about us.
                </div>
                <div>
                  <br />
                </div>
                <div>
                  To start your VietNam visa application now&nbsp;
                  <a
                    target='_blank'
                    href='http://visavisa.net/'
                    rel='noreferrer'
                  >
                    click here
                  </a>
                  "
          />
          <Accordion
            title="
              Can my VietNam visa application be rejected?
            "
            content="
                Rejections only occur if you have any one of the 2 following
                conditions:
                <div>
                  <ol>
                    <li>You have a criminal history</li>
                    <li>You were deported from VN previously.</li>
                  </ol>
                  <div>
                    *approvals and rejections are at the sole discretion of the
                    VN Government.
                  </div>
                  <div>
                    <br />
                  </div>
                </div>
                <div>
                  <span>To start your VietNam visa application now&nbsp;</span>
                  <a
                    href='http://visavisa.net/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    click here
                  </a>
                  "
          />
          <Accordion
            title="How can I apply for a VietNam visa ?"
            content="
                <div>
                  <b>
                    Steps to <u>Apply</u> or to know the rates of the visa at
                    www.VietNamvisa.com
                  </b>
                </div>
                <div>
                  1- Enter your <b>nationality</b> (your passport)
                </div>
                <div>
                  2- Select the <b>visa type</b>
                </div>
                <div>
                  3- Upload your Documents (Passport copy + Picture on plain
                  Background + ID card)
                </div>
                <div>4- Make Payment (by Visa or MasterCard).</div>
                <div>
                  <b>Note:</b> Dont forget to select the <i>Express</i> Service
                  before check out to get your approval within 12 hours!
                </div>
                <div>
                  <br />
                </div>
                <div>
                  To start your VietNam visa application now&nbsp;
                  <a
                    href='http://visavisa.net/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span>click here</span>
                  </a>
                  "
          />
          <Accordion
            title="
              What is the minimum age required to apply for VietNam Visa?
            "
            content="
                An individual applicant must be of at least 18 years old to be
                able to apply for their VN visa on a self basis. Any minor
                (under the age of 18) will need to apply with their
                parents/relatives (that are adult).
                <div>
                  <br />
                </div>
                <div>
                  To start your VietNam visa application now&nbsp;
                  <a
                    href='http://visavisa.net/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span>click here</span>
                  </a>
                  "
          />
        </div>
      </div>
    </section>
  );
};

export default Faq;
