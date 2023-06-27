"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";
import PricingBox from "../Pricing/PricingBox";

const Term = () => {

  return (
    <section id="pricing" className="relative pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="mb-8 w-full md:mb-12 lg:mb-16">
          <h1 className="bp-h1 black">Terms of Use</h1>
          <h1 className="bp-h1 bp-h1-grey">
          Please read these terms and conditions of service before using VietNamvisa.com
          </h1>
          <div className="flex justify-center">
            <div className="default-content-line"></div>
          </div>
        </div>
        <div className="mb-8 w-full md:mb-12 lg:mb-16">
          <p className="paragraph">
            <strong>
              BY USING THIS SITE, BY SENDING OR DELIVERING YOUR PASSPORT(S),
              APPLICATION(S), OTHER DOCUMENT(S) TO VietNamVisa.com YOU ACKNOWLEDGE
              READING AND ACCEPTING THESE TERMS &amp; CONDITIONS AND AGREE NOT
              TO VIOLATE OUR POLICIES.
            </strong>
          </p>
          <p className="paragraph">
            By using this site, you convey your agreement with these Terms &amp;
            Conditions and the Privacy Statement. If you do not agree with the
            terms stated in this agreement or are dissatisfied with the site
            please direct your complaints to Contact Us page. Failure to comply
            with these Terms &amp; Conditions may result in legal action and
            restriction of your ability to access this site. From time to time,
            VietNamVisa.com may modify these Terms &amp; Conditions. Please
            continue to review this agreement whenever accessing or using this
            site.{" "}
          </p>
          <h1 className="default-h1">Refund Policy</h1>
          <p className="paragraph">
            If you cancel the service you may be entitled to a refund. If your
            passport and other supporting documents were received by
            VietNamVisa.com and have already been submitted by VietNamVisa.com for
            processing at the time of cancelation you will not receive any
            refund; however, if the submission has not been made at the time of
            cancelation you will receive a partial refund deducting $25
            processing charge from the total amount. No refunds will be given
            for applications that have already been processed. <br />
            You may cancel by calling our service lines. Notwithstanding the
            foregoing, VietNamVisa.com cannot process refunds for Credit Card
            payments over 40 days old under any circumstances. In such cases
            VietNamVisa.com may issue a store credit applicable to future
            applications submitted through VietNamVisa.com. Credit cannot be
            transferred or cash redeemed. <br /> No refunds will be made for
            processed, rejected or approved applications.{" "}
          </p>
          <h1 className="default-h1">Processing Time</h1>
          <p className="paragraph">
            Processing time for visas and passports quoted by VietNamVisa.com are
            approximate and based on processing times provided by the
            immigration department of VN under normal circumstances. Processing
            time should be calculated starting the next business day of the date
            when the documents and payment is successfully submitted to
            VietNamVisa.com for Same Day and Next Day processing options.
            VietNamVisa.com or companies associated with it directly or indirectly
            will not be held responsible for any delays, cancellations,
            financial and other losses due to denial or delay in approvals. No
            service fees, thereof will be refunded due to delays or rejection of
            visa applications. <br />
          </p>
          <h1 className="default-h1">Fees and Payments</h1>
          <p className="paragraph">
            You agree that your credit card(s) will be billed immediately after
            online verification takes place. You agree to pay all fees and
            charges for any products or services offered for sale by
            VietNamVisa.com. You shall pay all applicable taxes and charges
            relating to the purchase of any products or services. Requirements
            and fees related to the processing of passports and visas are
            subject to change, including, but not limited to, immigration fees,
            processing charges and documentation required for visa issuance,
            which are subject to change without notice. <br />
          </p>
          <h1 className="default-h1">Shipping / Sending of Visa</h1>
          <p className="paragraph">
            All approved visas will be sent via email. Visas will only be sent
            once the payment for the same has been received in full. <br />
          </p>
          <h1 className="default-h1">Service Description</h1>
          <p className="paragraph">
            VietNamvisa.com does its best to correctly describe all services that
            appear on the website. However, VietNamvisa.com does not warrant that
            all the statements, definitions, and descriptions are most current,
            complete, accurate, and error free. Government and Immigration
            Department often change their requirements and fees without prior
            warning and changes can take effect immediately. In an event, shall
            any description of service or any information on our site become
            outdated or inaccurate, VietNamvisa.com is not to be held responsible.
            You will not hold VietNamvisa.com responsible for any and all
            inaccuracies or mistakes in service descriptions, prices, processing
            times, processing dates, and other information provided on the
            VietNamvisa.com website. <br />
          </p>
          <h1 className="default-h1">Service</h1>
          <p className="paragraph">
            Requirements and fees related to the processing of visa applications
            are subject to change without notice. Passports and additional
            documents required for visa issuance are subject to change without
            notice. Immigration department may request any additional
            documentation at their discretion. They may also decline issuance of
            visa without disclosing the reason for denial. Processing time for
            visas quoted by VietNamvisa.com are approximations based on normal
            circumstances, and are deemed reliable in most cases but are not
            guaranteed. VietNamvisa.com will not be held responsible for any
            delays, cancellations, financial and other losses due to denial or
            delay in processing. VietNamvisa.com reserves the right to decline
            processing of documents for any reason, including but not limited to
            incomplete documentation, insufficient processing time, or unusual
            circumstances. <br />
          </p>
          <h1 className="default-h1">Communication</h1>
          <p className="paragraph">
            By using this site and our services you give VietNamvisa.com your
            express permission to contact you via email, messaging, or other
            electronic or non-electronic forms of communication for all purposes
            including distribution of marketing and promotional materials.{" "}
            <br />
          </p>
          <h1 className="default-h1">Security</h1>
          <p className="paragraph">
            By submitting registration and application forms, you certify that
            the information you provide is true and correct. You are responsible
            for maintaining the confidentiality of your User ID (login) and
            password. You are responsible for all uses of your User ID (login),
            whether or not authorised by you. <br />‍ <br />
            You agree to notify us immediately of any unauthorised use of your
            User ID or password. Please refer to our Privacy Statement that
            governs submitted &amp; distributed information. <br />
          </p>
          <h1 className="default-h1">Intellectual Property</h1>
          <p className="paragraph">
            This Web site, including but not limited to text, content,
            photographs, graphics, software applications, is protected as a
            collective work by copyrights, trademarks, service marks,
            international treaties and/or other proprietary rights and laws of
            the VN. All logos, images, Web site design, text, graphics,
            software, HTML code used to generate Web pages on VietNamvisa.com, are
            the sole property of Menga LLC and cannot be copied, adapted,
            sketched, painted, or otherwise reproduced in any manner whatsoever
            without the prior written permission of Menga LLC. All other service
            marks, trademarks, names or logos, individual articles, columns and
            other elements are the property of their respective owners. Menga
            LLC is not responsible for other service marks, trademarks, names or
            logos, articles, columns, and other elements that may be copyrighted
            or may be the trademarks and/or service marks of their respective
            owners. <br />
          </p>
          <h1 className="default-h1">Copyrightes and Trademark Compliance</h1>
          <p className="paragraph">
            This Web site, including but not limited to text, content,
            photographs, graphics, software applications, is protected as a
            collective work by copyrights, trademarks, service marks,
            international treaties and/or other proprietary rights and laws of
            the VN. All logos, images, Web site design, text, graphics,
            software, HTML code used to generate Web pages on VietNamvisa.com, are
            the sole property of Menga LLC and cannot be copied, adapted,
            sketched, painted, or otherwise reproduced in any manner whatsoever
            without the prior written permission of Menga LLC. All other service
            marks, trademarks, names or logos, individual articles, columns and
            other elements are the property of their respective owners. Menga
            LLC is not responsible for other service marks, trademarks, names or
            logos, articles, columns, and other elements that may be copyrighted
            or may be the trademarks and/or service marks of their respective
            owners. <br />
          </p>
          <h1 className="default-h1">Indemnification</h1>
          <p className="paragraph">
            You shall indemnify, hold and save harmless, and defend at your own
            expense VietNamvisa.com, its officers, directors, agents, and
            employees from and against all suits, claims, demands and liability
            of any nature or kind, including costs and expenses arising out of
            acts of violation of these Terms &amp; Conditions by you, your
            employees, agents, sub-contractors, or anyone using your
            computer/user ID. This requirement shall extend to claims or
            liabilities of any third parties arising out of the use of any
            patented or copyrighted information or for any other reason. You
            agree to pay any and all costs, damages and expenses, including, but
            not limited to, reasonable attorneys fees and costs awarded against
            or otherwise incurred by or in connection with or arising from any
            claim, suit and/or action or proceeding attributable to any such
            action. <br />
          </p>
          <h1 className="default-h1">Termination</h1>
          <p className="paragraph">
            You agree that VietNamvisa.com shall have the right to terminate your
            ability to access this site at any time without notice and you that
            will not hold VietNamvisa.com responsible or liable for any damages
            whatsoever. VietNamvisa.com reserves the right to decline processing
            of documents for any reason, including but not limited to incomplete
            documentation, insufficient processing time, or unusual
            circumstances. <br />
          </p>
          <h1 className="default-h1">Links</h1>
          <p className="paragraph">
            This web site contains links to third-party Web sites. These links
            are provided exclusively for information purposes and to assist in
            locating other Internet resources. We are not responsible for the
            content, accuracy of information, expressed opinions or statements,
            of any third-party sites linked to us or any links contained in a
            linked site. <br />
          </p>
          <h1 className="default-h1">Restriction on Use</h1>
          <p className="paragraph">
            This site is intended for use by adult individuals over 18 years of
            age. It may not be used for any illegal purpose or in any manner
            inconsistent with these Terms &amp; Conditions. You may not use this
            site for any reason other than its intended purpose. If you submit
            any information to our site, you agree not to post or transmit
            pyramid schemes or chain letters, a virus or any other harmful
            component, anything that violates the copyright or intellectual
            property rights of any person or entity, including but not limited
            to copyrights and trademarks, anything that is defamatory, abusive,
            libellous, unlawful, obscene, threatening, harassing, fraudulent,
            pornographic, harmful, or that could constitute or encourage conduct
            that would be considered a criminal offence, give rise to civil
            liability, or otherwise violate any law. YOU MAY NOT COPY,
            REPRODUCE, RECOMPILE, DECOMPILE, DISASSEMBLE, REVERSE ENGINEER,
            DISTRIBUTE, PUBLISH, DISPLAY, PERFORM, MODIFY, UPLOAD TO, CREATE
            DERIVATIVE WORKS FROM, RECIRCULATE, TRANSMIT OR IN ANY WAY EXPLOIT
            ANY PART OF THIS WEBSITE, IMAGES AND OTHER MATERIAL, OR OFFER ANY
            PART OF THE SERVICE FOR SALE, OR DISTRIBUTION WITHOUT THE PRIOR
            WRITTEN CONSENT OF VietNamvisa.com. <br />
          </p>
          <h1 className="default-h1">Disclamer</h1>
          <p className="paragraph">
            All the information on this web site is provided as is and without
            warranties, expressed or implied, as to the accuracy or completeness
            of the information, fitness for a particular use or purpose,
            including warranties of merchantability, title, non-infringement or
            otherwise. In no event shall VietNamvisa.com be responsible for any
            damages or losses whatsoever, direct or indirect, incidental or
            consequential, special or punitive, arising from or relating to the
            use or inability to use this web site. VietNamvisa.com hereby
            disclaims all warranties with regard to the hardware and software
            used to support this web site including all implied warranties,
            fitness for a particular purpose and incidental, special, direct or
            consequential damages. Accordingly, VietNamvisa.com, its officers and
            employees, partners, affiliates, subsidiaries, successors and
            assigns, and its third-party agents shall not, directly or
            indirectly, be liable, in any way, to you or any other person for
            any inaccuracies or errors in or omissions from the services
            including, but not limited to delays, errors or interruptions in the
            transmission or delivery of services, products, or loss, or damage
            arising for any reason from non-performance. VietNamvisa.com does not
            make any warranties or representations of any kind with respect to
            information, requirements, restrictions, quality, content, theme,
            style, and expressions provided directly or through any third party
            to this web site. <br />
          </p>
          <h1 className="default-h1">Entire Agreement</h1>
          <p className="paragraph">
            This agreement along with the Privacy Statement constitute the
            entire agreement between you and VietNamvisa.com and supersedes any
            and all prior agreements, statements or representations regarding
            VietNamvisa.com. Failure to enforce any provision of this Agreement
            shall not be construed as a waiver of such provision or of the right
            to enforce such provision. No waiver, amendment, or other
            modification made by you shall be valid or binding unless in writing
            and signed by both parties. This agreement is governed by the laws
            of United Arab Emirates. <br />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Term;
