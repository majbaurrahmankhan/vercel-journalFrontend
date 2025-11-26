import React from 'react';
import './EditorialBord.css';


const EditorialBoard = () => {
    return (
        <div>
           <h2 class = 'info'>List of Editorial Board Members</h2>
                     <div class = 'list-of-editorial-bord'>
                        <h6><b>
                         List of Editorial Board Members<br></br>
                         Chief Editor<br></br>
                         Dean, Faculty of Science, Jagannath University, Dhaka</b><br></br><br></br></h6> 

                         <h4>Associate Editors:</h4>
                         <div class = 'associate-Editors'>
                                a) Professor Dr. A. J. Saleh Ahammad, Department of Chemistry, Jagannath University, Dhaka <br></br>

                                b) Professor Dr. Abul Hasnat Rubel, Department of Physics, Jagannath University,Dhaka 
                         </div>

                         <h4>Editorial Board Members:</h4>
                         <div class = 'Editorial-Board-Members'>

                            <ul>
                                <li>Chairman,Deaprtment of Computer Science and Engineering, University of Chittagong, Chittagong</li>
                                <li>Chairman, Department of Mathematics, University of Chittagong, Chittagong</li>
                                <li>Chairman, Department of Chemistry, University of Chittagong, Chittagong</li> 
                                <li>Chairman, Department of Statistics, University of Chittagong, Chittagong</li>
                                <li>Chairman, Department of Physics, University of Chittagong, Chittagong</li>
                                
                                
                            </ul>

                         </div>
                         
                                        
                     </div>
                     
           
        </div>
    );
};

export default EditorialBoard;