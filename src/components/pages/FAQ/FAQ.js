import React from 'react';
import { Link } from 'react-router-dom';

import faqHeadings from '../../../assets/data/faqs/faqLinks';

function FAQ() {
    const faqLinks = faqHeadings.map( link => {
        return <li key={link.path} className="faq_link"><Link to={link.path}>{link.name}</Link></li>
    })
    
    return(
        <main className="faq_page">
            <h1 className="large_heading">FAQ</h1>
            <hr/>
            <p className="faq_p">Please review the list of Frequently Asked Questions (FAQs) below. If you are unable to find your answer below, or if you would rather speak with a Client Services Specialist, please reach out using the below contact methods.</p>
            <br/>
            <article className="faq_contents">
                <h2 className="medium_heading">Table of Contents</h2>
                <br/>
                <ul className="table_of_contents">
                    { faqLinks }
                </ul>
                <br/>
                <hr/>
            </article>
            <article className="faq_contents" id="faq-general">
                <h2 className="medium_heading">{ faqHeadings[0].name }</h2>
                <br/>
                <h4 className="bold_subheading">Where are you located?</h4>
                <p className="faq_p">Corporate Offices</p>
                <p className="faq_p">Our corporate offices and production facilities are located in Las Vegas, Nevada.</p>
                <br/>
                <p className="faq_p">LIK Fine Art Galleries</p>
                <p className="faq_p">We currently operate 12 Galleries with locations in the following cities: Aspen, Colorado; Houston, Texas; La Jolla, California; Las Vegas, Nevada; Key West and Miami, Florida; Soho, New York; Waikiki and Lahaina, Hawaii.</p>
                <br/>
                <h4 className="bold_subheading">What are your hours of operations?</h4>
                <p className="faq_p">Corporate Offices</p>
                <p className="faq_p">LIK Fine Art is open Monday through Friday from 8am to 5pm pst.</p>
                <br/>
                <p className="faq_p">LIK Fine Art Galleries</p>
                <p className="faq_p">Please locate your gallery of interest below for hours of operation.</p>
                <br/>
                <p className="faq_p">Aspen</p>
                <p className="faq_p">Monday  10am - 8pm</p>
                <p className="faq_p">Tuesday - Friday  10am - 10pm</p>
                <p className="faq_p">Saturday  9am - 10pm</p>
                <p className="small_italics">Note: Hours may vary by season</p>
                <br/>
                <p className="faq_p">Caesars</p>
                <p className="faq_p">Sunday - Thursday  10am - 11pm</p>
                <p className="faq_p">Friday - Saturday  10am - 12am</p>
                <br/>
                <p className="faq_p">Chicago</p>
                <p className="faq_p">Monday - Sunday  10am - 10pm</p>
                <br/>
                <p className="faq_p">Dallas</p>
                <p className="faq_p">Monday - Saturday  10am - 9pm</p>
                <p className="faq_p">Sunday  12pm - 6pm</p>
                <br/>
                <p className="faq_p">Forum</p> 
                <p className="faq_p">Sunday - Thursday  10am - 11pm</p> 
                <p className="faq_p">Friday - Saturday  10am - 12am</p> 
                <br/>
                <p className="faq_p">Houston</p> 
                <p className="faq_p">Monday - Saturday  10am - 9pm</p> 
                <p className="faq_p">Sunday 11am - 7pm</p>
                <br/>
                <p className="faq_p">Key West</p> 
                <p className="faq_p">Monday - Sunday  10am - 10pm</p> 
                <br/>
                <p className="faq_p">La Jolla</p> 
                <p className="faq_p">Sunday - Thursday  10am - 9pm</p> 
                <p className="faq_p">Friday - Saturday  10am - 10pm</p> 
                <br/>
                <p className="faq_p">Lahaina</p> 
                <p className="faq_p">Monday - Sunday  10am - 10pm</p> 
                <br/>
                <p className="faq_p">Mandalay</p> 
                <p className="faq_p">Monday - Sunday  10am - 11pm</p> 
                <br/>
                <p className="faq_p">Miami</p> 
                <p className="faq_p">Monday - Sunday  10am - 11pm</p> 
                <br/>
                <p className="faq_p">Soho</p> 
                <p className="faq_p">Sunday - Thursday  10am - 8pm</p> 
                <p className="faq_p">Friday - Saturday  10am - 9pm</p> 
                <br/>
                <p className="faq_p">Venetian</p> 
                <p className="faq_p">Sunday - Thursday  10am - 11pm</p> 
                <p className="faq_p">Friday - Saturday  10am - 12am</p> 
                <br/>
                <p className="faq_p">Waikiki</p> 
                <p className="faq_p">Sunday - Thursday  10am - 10pm</p> 
                <p className="faq_p">Friday - Saturday  10am - 11pm</p> 
                <br/>
                <h4 className="bold_subheading">How do I speak to a company representative?</h4>
                <p className="faq_p">You can email us by simply clicking here or speak live with an Art Specialist via our web chat by clicking the chat window at the bottom right corner of this page.</p> 
                <p className="small_plain_text">Chat available Monday – Friday from 8am to 5pm pst. Inquiries received during non-business hours will be answered the next day.</p>
                <br/>
            </article>
            <hr/>
            <article className="faq_contents" id="faq-about">
                <h2 className="medium_heading">{ faqHeadings[1].name }</h2>
                <h4 className="bold_subheading">What is LIK Fine Art?</h4>
                <p className="faq_p">LIK Fine Art is a luxury brand of Fine Art Photography by Master Photographer Peter Lik. Founded in Cairns, Australia in 1997, LIK Fine Art sells Limited Edition photographic artwork through its 12 Galleries across the United States and on its online store.</p>

                <h4 className="bold_subheading">Who is Peter Lik?</h4>
                <p className="faq_p">World-renowned, highly awarded, and boasting a huge international following, Peter Lik's journey as a photographer has taken him from humble beginnings in his native Australia to the summit of international landscape photography. Entirely self-taught, Lik became enamored with the mighty landscapes of America, particularly the Southwest. After extended visits to the country in the 1980s, he decided to settle in Las Vegas, centrally located to the landscapes he loves so much. The rest is photographic history.</p>

                <Link className="faq-link" to="/pages/biography">Learn more about Peter ></Link> 

                <h4 className="bold_subheading">Where can I see the art in person?</h4>
                <p className="faq_p">We currently operate 12 Galleries with locations in the following cities: Aspen, Colorado; Houston, Texas; La Jolla, California; Las Vegas, Nevada; Key West and Miami, Florida; Soho, New York; Waikiki and Lahaina, Hawaii.</p>

                <h4 className="bold_subheading">What is a Limited Edition?</h4>
                <p className="faq_p">Limited Edition means that there will only ever be a pre-determined number of prints produced of each photograph. Once the edition sells out, there will never be another reprint of that photograph. LIK Fine Art Editions come in multiple sizes ranging from 100 - 950 signed prints.</p> 

                <h4 className="bold_subheading">Are there any additional Edition types available for purchase?</h4>
                <p className="faq_p">LIK Fine Art photographs are created in multiple editions variations. For more information about any of the editions listed below, please contact an Art Specialist via email by simply clicking here or speak live with an Art Specialist via our web chat by clicking the chat window at the bottom right corner of this page.</p>
                <p className="small_plain_text">Chat available Monday – Friday from 8am to 5pm pst. Inquiries received during non-business hours will be answered the next day.</p>

                <p className="faq_p">High Definition Artist Proofs</p>
                <p className="faq_p">With each standard image release, only 10 - 45 numbered and signed High-Definition Artist Proofs are made available. These editions are regarded as personal to the artist and therefore highly sought after by collectors.</p>

                <p className="faq_p">Epic Editions</p> 
                <p className="faq_p">Spanning up to 27 feet, LIK Epics are the largest of Peter’s photographic prints. These grand visions of landscapes from around the world require a minimum of 3 separate panels to display the entire photograph. Each LIK Epic is numbered and signed by the artist and are available as a Limited Edition or Artist Proof.</p> 

                <p className="faq_p">Platinum Editions</p> 
                <p className="faq_p">These highly coveted works from Peter Lik are slightly more accessible than his Elite Editions, with only 10 prints or less available. Each image is signed and numbered by the artist.</p> 

                <p className="faq_p">Elite Editions</p> 
                <p className="faq_p">Elite Editions are exclusive, one-of-a-kind images that have been hand selected and signed by Peter. They are considered to be among his most rare and valuable Masterworks – embodying a legendary career in landscape photography. While Elite Editions are available to any collector, they are usually acquired by the most avid of Peter Lik enthusiasts.</p>

                <h4 className="bold_subheading">Why does the price of the artwork change over time?</h4> 
                <p className="faq_p">LIK Fine Art Limited Editions are produced in a pre-determined edition size. As demand for one of Peter’s Fine Art Photographs goes up, so does the price. Collecting early guarantees you are also receiving the most competitive pricing available.</p>
            </article>
            <article className="faq_contents" id="faq-craftsmanship">
                <h2 className="medium_heading">{ faqHeadings[2].name }</h2>
            </article>
            <article className="faq_contents" id="faq-care-handling">
                <h2 className="medium_heading">{ faqHeadings[3].name }</h2>
            </article>
            <article className="faq_contents" id="faq-purchase-online">
                <h2 className="medium_heading">{ faqHeadings[4].name }</h2>
            </article>
            <article className="faq_contents" id="faq-shipping-delivery">
                <h2 className="medium_heading">{ faqHeadings[5].name }</h2>
            </article>
            <article className="faq_contents" id="faq-returns-exchanges">
                <h2 className="medium_heading">{ faqHeadings[6].name }</h2>
            </article>
            <article className="faq_contents" id="faq-account">
                <h2 className="medium_heading">{ faqHeadings[7].name }</h2>
            </article>
        </main>
    )
}

export default FAQ;