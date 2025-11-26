import React from 'react';
import HomeInventories from './HomeInventories';
import Banner from '../Banner/Banner';
import './Home.css';


const Home = () => {
    return (
        
            <div class='genarelInfo'>
                <h2 class = 'info'>General Information</h2>
                <h5>Welcome to the University of Chittagong Journal of Computer Science & Engineering(CUJCSE)</h5>
                <div class = 'home-info'>
                <h6>
                    
                    Contact Chief Editor/Associate Editors to submit articles by <a href="mailto:hossain_ms@cu.ac.bd">E-mail</a>.
                    <br></br><br></br><br></br>
                    Manuscript Submission Contact: <br></br>
                    abunowsedchowdory@cse.cu.ac.bd (Dr. Abu Nowshed Chy, Associate Editor)<br></br>
                    rudroprotapdev@cse.cu.ac.bd  (Dr. Rudra Pratap Deb Nath, Associate Editor)
                </h6>
                <div class="instructionsForAuthors">

                    The <b>University of Chittagong Journal of Computer Science & Engineering</b> is the official journal of the <b><a target='blank' href='https://cu.ac.bd/fengg/'>Faculty of Engineering</a></b> at the <b><a target='blank' href='https://cu.ac.bd/'>University of Chittagong</a></b>. The aim of the journal is to publish articles based on original, empirical, and innovative research work in various areas of science. The ultimate goal of the journal is to develop, promote, and explore scientific inventions and discoveries. It invites authors from all over the world to submit their manuscripts. The journal is committed to maintaining international standards, quality, and best practices. Three types of articles can be submitted:                    <ol>
                        <li>Full article</li>
                        <li>Review article</li>
                        <li>Short communicatione</li>
                    </ol>
                </div>


                <div>

                     <h4>Manuscript Preparation for Full Article</h4>
                     <p>The manuscript must be written in English and typed in <b>Times New Roman, 12-point font</b>, with <b>double spacing</b> on good-quality A4-sized bond paper with sufficient margins (<b>left and top: 3.8 cm; right and bottom: 2.5 cm</b>). All <b>headings and subheadings</b> should be <b>bold</b>, with headings in <b>14-point</b> and subheadings in <b>12-point</b> font. Manuscripts should be submitted to the <b>Chief Editor</b> at the Faculty address. The <b>Editorial Board</b> reserves the final right to accept or reject any paper after the review process.</p>


                     <p>
                        A full paper should be limited to <b>ten typed pages</b>, including tables, figures, graphs, references, etc. At least <b>two sets of hard copies (including one original)</b> along with a <b>soft copy via email</b> must be submitted. The manuscript should conventionally include the following sub-titles in sequence: 
                        <b>Title, Abstract, Keywords, Introduction, Materials and Methods, Results and Discussion, Conclusion, Acknowledgements (if any), and References</b>. In the case of a <b>Short Communication</b>, no subtitles are necessary.
                    </p>
                    <p>
                        <p><b>1. Title:</b> The title of the article should be brief, specific, and representative, written in <b>full capital letters, bold, and 14-point font</b>. The manuscript should have a separate title page containing the article title, author(s) name(s), affiliations, and a running head. The second page should again display the title of the article, followed by the abstract, introduction, and other sections in sequence, but without the author(s) name(s).</p>

                        <p><b>2. Abstract:</b> The abstract should not exceed <b>200 words</b> and should include only the gist of the paper, providing very condensed details.</p>

                        <p><b>3. Keywords:</b> It should not exceed <b>7 words</b> and should be typed in <i>italic</i>.</p>

                        <p><b>4. Introduction:</b> It should be concise, include the hypothesis and study design, and be precise and relevant to the study.</p>

                        <p><b>5. Materials and Methods:</b> This section should describe the special or standard methods, which should be cited only as references. Methods should not be described in detail unless modifications have been made or a new setup has been introduced, in which case the changes should be clearly stated.</p>

                        <p><b>6. Results and Discussion:</b> This section should include the results obtained, along with figures, tables, graphs, and photographs. If a table is provided, a graph is not necessary, and vice versa. This section should then be followed by a conventional discussion.</p>

                        <p><b>7. Tables, Graphs, and Figures:</b> The paper should contain a minimum number of tables, graphs, and figures. Figures and graphs should be properly drawn with bold, solid lines so that they can be reduced to half or less of the original size. Photographs should be submitted on glossy paper.</p>

                        <p><b>8. Conclusion:</b> This section should summarize the entire research, presenting the study from start to finish in a concise form.</p>

                        <p><b>9. Acknowledgements:</b> Acknowledgements of individuals, funding sources, grants, institutions, etc., should be cited briefly.</p>


                        <p><b>10. References:</b> In the text, references should be cited within parentheses, quoting the author’s surname and the year of publication in the appropriate place, e.g., (Bhuiyan, 1964), (Khaleque et al., 1970). References should be arranged alphabetically according to the author’s surname at the end of the paper. The name of the journal and the name of the publisher of a book should be in <i>italic</i>, along with the edition and year of publication. Examples are given below:
                       
                       
                         <ul>
                            <li  class="demoJournal">Islam M. S., Sattar M. R., and Rahman M. M. (2001). Psychophysical Health in Relation with the Environmental Noises. Journal of Acoustical Society of America, 2(1): 250-260.</li>


                            <li  class="demoJournal">Sultan M. S. 1991. Insect Pests of Tropical Food legumes. John Willey and Sons. New York, 485.</li>
                        </ul>                      
                           
                        </p>

                    </p>

                </div>

                <div class="reviewArticle">
                    <h4>For Review Article</h4>

                        <p>Submission of <b>reviews</b> and <b>perspectives</b> covering topics of current interest are welcome and encouraged. Reviews should be concise and no longer than <b>8–10 printed pages</b> (double-spaced).</p>

                </div>


                 <div>
                    <h4>For Short Communications</h4>

                        <p><b>Short Communication:</b> A short communication is suitable for reporting the results of complete small investigations or providing details of new models, innovative methods, techniques, or apparatus. The style of the main sections need not conform to that of full-length papers. It should be <b>2–4 printed pages</b> in length.</p>

                </div>

                 <div>
                    <h6>Off-prints</h6>
                    <p><b>Off-prints:</b> The corresponding author of each paper is entitled to receive <b>5 off-prints</b> free of cost. Off-prints are separate copies of the published article, provided for the author’s personal record, sharing with colleagues, or institutional use.</p>


                </div>

                 <div>
                    <h4>Declaration:</h4> 
                    
                    <p>Submission of a manuscript implies that the work described has not been published before (except in the form of an abstract or as part of a published lecture or thesis), is not under consideration for publication elsewhere, and that if and when the manuscript is accepted for publication, the authors will agree to the automatic transfer of copyright to the publisher.</p>


                </div>




                </div>
                

            {/* <div>    
            <p>
                Call for Article:<br></br>
                Volume-11 (No 1 & 2 ) 2025<br></br>
                Please send a Soft copy through email<br></br>
                E-mail: jnujles@jnu.ac.bd<br></br>
                Cell: +8801739102760<br></br>
            </p>


            </div> */}
            
            {/* <div class = "instructionsForAuthors">
                <p>
                 <div style={{color: "black", alignItems: "center"}}>
                    <h2>INSTRUCTIONS FOR AUTHORS</h2>
                    </div>
                <p>
                    The University of Chittagong Journal of Computer Science and Engineering (CUJCSE) is an official publication of the Department of Computer Science & Engineering, University of Chittagong. The aim of this journal is to publish high-quality, original, empirical, and innovative research works in various areas of Computer Science, Engineering, and Information Technology. The journal’s ultimate goal is to encourage, promote, and disseminate scientific and technological advancements. Researchers from all over the world are invited to submit their manuscripts. The journal is committed to maintaining international standards, quality, and ethical guidelines.Authors may submit three types of manuscripts:
                    <ul>
                        <li>Full Research Article</li>
                        <li>Review Article</li>
                        <li>Short Communication</li>
                    </ul>
                </p>
            </p>

            </div> */}
            <div class="instructions">
                

            </div>
            

            <HomeInventories></HomeInventories>
            {/* <ArrivalProduct></ArrivalProduct> */}
           
           
        </div>
    );
};

export default Home;