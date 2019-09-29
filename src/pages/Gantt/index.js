import React, { Component } from 'react';
import START_SVG from '../../assets/images/svg/star.svg';

class Gantt extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Gantt - Tasks follow-up</h1>
                <div className="gantt">
                    <div className="gantt__row gantt__row--months">
                        <div className="gantt__row-first">FY20</div>
                        <span>Oct</span><span>Nov</span><span>Dec</span>
                        <span>Jan</span><span>Feb</span><span>Mar</span>
                        <span>Apr</span><span>May</span><span>Jun</span>
                        <span>Jul</span><span>Aug</span><span>Sep</span>
                    </div>
                    <div className="gantt__row gantt__row--lines" data-month="5">
                        <span className="col-user"></span>
                        <span></span><span></span><span></span><span className="lastWeek"></span>
                        <span></span><span></span><span></span><span className="lastWeek"></span>
                        <span></span><span></span><span></span><span className="lastWeek"></span>
                        <span></span><span></span><span></span><span className="lastWeek"></span>
                        <span></span><span></span><span></span><span className="lastWeek"></span>
                        <span></span><span></span><span></span><span className="lastWeek"></span>
                        <span></span><span></span><span></span><span className="lastWeek"></span>
                        <span></span><span></span><span></span><span className="lastWeek"></span>
                        <span></span><span></span><span></span><span className="lastWeek"></span>
                        <span></span><span></span><span></span><span className="lastWeek"></span>
                        <span></span><span></span><span></span><span className="lastWeek"></span>
                        <span></span><span></span><span></span><span className="lastWeek"></span>

                    </div>

                    <div className="gantt__row">
                        <div className="gantt__row-first" style={{ borderLeft: '10px solid #55efc4' }}>
                            Supervisor STUDIO STARK<img className="lead" src={START_SVG} alt="lead" />
                        </div>
                        <ul className="gantt__row-bars">
                            <li className="permanent" style={{ "grid-column": "1/49", "background-color": "#2d3436" }}>Global process definition</li>
                            <li className="permanent" style={{ "grid-column": "1/49", "background-color": "#d63031" }}>Development follow-up</li>
                            <li className="permanent" style={{ "grid-column": "1/49", "background-color": "#2ecaac" }}>Tridion follow-up</li>
                            <li className="permanent" style={{ "grid-column": "1/49", "background-color": "#a29bfe" }}>Testing follow-up</li>

                            <li className="permanent" style={{ "grid-column": "1/49", "background-color": "#e84393" }}>Castmembers follow-up</li>
                            <li className="permanent" style={{ "grid-column": "1/49", "background-color": "#e84393" }}>
                                Suppliers follow-up / Integration / Device / EMEA / Badge
                            </li>
                            <li className="permanent" style={{ "grid-column": "1/49", "background-color": "#e84393" }}>Suppliers missions extension</li>

                            <li className="permanent" style={{ "grid-column": "1/49", "background-color": "#74b9ff" }}>Internal tools development support</li>
                            <li className="permanent" style={{ "grid-column": "1/49", "background-color": "#74b9ff" }}>Lincenses management</li>

                        </ul>
                    </div>

                    <div className="gantt__row" style={{ background: '#636e72' }}>
                        <div className="gantt__row-first" style={{ background: '#636e72' }}></div>
                        <ul className="gantt__row-bars"></ul>
                    </div>

                    <div className="gantt__row">
                        <div className="gantt__row-first" style={{ borderLeft: '10px solid #d63031' }}>
                            Arnaud Delacroix<img className="lead" src={START_SVG} alt="lead" />
                        </div>
                        <ul className="gantt__row-bars">
                            <li className="stripes continue" style={{ "grid-column": "1/5", "background-color": "#2ecaac" }}>BriefGen X v2 deployement</li>
                            <li className="stripes permanent" style={{ "grid-column": "5/49", "background-color": "#2ecaac" }}>BriefGen X development + support</li>
                            <li style={{ "grid-column": "1/49", "background-color": "#e17055" }}>> 100 Web sites migration (GDPR)</li>
                            <li style={{ "grid-column": "1/49", "background-color": "#6c5ce7" }}>Stark App</li>

                            <li style={{ "grid-column": "3/9", "background-color": "#fdcb6e" }}>Run Disney</li>
                            <li style={{ "grid-column": "3/9", "background-color": "#fdcb6e" }}>My Igift Running bag</li>
                            <li style={{ "grid-column": "41/48", "background-color": "#fdcb6e" }}>Run Disney</li>
                            <li style={{ "grid-column": "41/48", "background-color": "#fdcb6e" }}>My Igift Running bag</li>

                            <li className="permanent" style={{ "grid-column": "1/49", "background-color": "#2d3436" }}>Event web sites (Laravel)</li>
                            <li className="permanent" style={{ "grid-column": "1/49", "background-color": "#6c5ce7" }}>Portal Wifi</li>

                            <li className="permanent" style={{ "grid-column": "1/49", "background-color": "#e84393" }}>Kubernates management</li>
                            <li className="permanent" style={{ "grid-column": "1/49", "background-color": "#b2bec3" }}>Collectivité web site</li>
                            <li style={{ "grid-column": "1/6", "background-color": "#b2bec3" }}>Collectivité : price simulator file</li>
                            <li className="permanent" style={{ "grid-column": "1/49", "background-color": "#2ecaac" }}>Annual passport : calendar generator</li>
                            <li className="permanent" style={{ "grid-column": "1/49", "background-color": "#2ecaac" }}>TMS management</li>


                            <li className="stripes permanent" style={{ "grid-column": "1/49", "background-color": "#0984e3" }}>Crush Coaster the game v3</li>
                            <li className="stripes permanent" style={{ "grid-column": "1/49", "background-color": "#2ecaac" }}>Castle Hub</li>
                            <li className="permanent" style={{ "grid-column": "1/49", "background-color": "#2ecaac" }}>Splash (Social media)</li>



                        </ul>
                    </div>

                    <div className="gantt__row">
                        <div className="gantt__row-first" style={{ borderLeft: '10px solid #d63031' }}>
                            Soufien Hidouri<img className="lead" src={START_SVG} alt="lead" />
                        </div>
                        <ul className="gantt__row-bars">
                            <li className="stripes continue" style={{ "grid-column": "1/5", "background-color": "#2ecaac" }}>BriefGen X v2 deployement</li>
                            <li className="stripes permanent" style={{ "grid-column": "5/49", "background-color": "#2ecaac" }}>BriefGen X development + support</li>
                            <li style={{ "grid-column": "1/49", "background-color": "#e17055" }}>> 100 Web sites migration (GDPR)</li>
                            <li style={{ "grid-column": "1/49", "background-color": "#6c5ce7" }}>Stark App</li>

                            <li style={{ "grid-column": "3/9", "background-color": "#fdcb6e" }}>Run Disney</li>
                            <li style={{ "grid-column": "3/9", "background-color": "#fdcb6e" }}>My Igift Running bag</li>
                            <li style={{ "grid-column": "41/48", "background-color": "#fdcb6e" }}>Run Disney</li>
                            <li style={{ "grid-column": "41/48", "background-color": "#fdcb6e" }}>My Igift Running bag</li>

                            <li className="permanent" style={{ "grid-column": "1/49", "background-color": "#2d3436" }}>Event web sites (Laravel)</li>
                            <li className="permanent" style={{ "grid-column": "1/49", "background-color": "#6c5ce7" }}>Portal Wifi</li>

                            <li className="permanent" style={{ "grid-column": "1/49", "background-color": "#e84393" }}>Kubernates management</li>
                            <li className="permanent" style={{ "grid-column": "1/49", "background-color": "#b2bec3" }}>Collectivité web site</li>
                            <li style={{ "grid-column": "1/6", "background-color": "#b2bec3" }}>Collectivité : price simulator file</li>
                            <li className="permanent" style={{ "grid-column": "1/49", "background-color": "#2ecaac" }}>Annual passport : calendar generator</li>
                            <li className="permanent" style={{ "grid-column": "1/49", "background-color": "#2ecaac" }}>TMS management</li>


                            <li className="stripes permanent" style={{ "grid-column": "1/49", "background-color": "#0984e3" }}>Crush Coaster the game v3</li>
                            <li className="stripes permanent" style={{ "grid-column": "1/49", "background-color": "#2ecaac" }}>Castle Hub</li>
                            <li className="permanent" style={{ "grid-column": "1/49", "background-color": "#2ecaac" }}>Splash (Social media)</li>

                        </ul>
                    </div>

                    <div className="gantt__row" style={{ background: '#636e72' }}>
                        <div className="gantt__row-first" style={{ background: '#636e72' }}></div>
                        <ul className="gantt__row-bars"></ul>
                    </div>

                    <div className="gantt__row stripes">
                        <div className="gantt__row-first stripes" style={{ borderLeft: '10px solid #81ecec' }}>
                            Julien Law-Lone<img className="lead" src={START_SVG} alt="lead" />
                        </div>
                        <ul className="gantt__row-bars">
                            <li className="stripes" style={{ "grid-column": "1/11", "background-color": "#2ecaac" }}>Package : PI 2 - Tridion design</li>
                            <li style={{ "grid-column": "11/22", "background-color": "#2ecaac" }}>Package : PI 3 - Tridion design</li>
                            <li style={{ "grid-column": "22/33", "background-color": "#2ecaac" }}>Package : PI 4 - Tridion design</li>
                            <li style={{ "grid-column": "33/44", "background-color": "#2ecaac" }}>Package : PI 5 - Tridion design</li>
                            <li className="toBeContinue" style={{ "grid-column": "44/49", "background-color": "#2ecaac" }}>Package : PI 6 - Tridion design</li>

                            <li className="stripes" style={{ "grid-column": "1/11", "background-color": "#2ecaac" }}>Package : PI 2 - Tridion training</li>
                            <li style={{ "grid-column": "11/22", "background-color": "#2ecaac" }}>Package : PI 3 - Tridion training</li>
                            <li style={{ "grid-column": "22/33", "background-color": "#2ecaac" }}>Package : PI 4 - Tridion training</li>
                            <li style={{ "grid-column": "33/44", "background-color": "#2ecaac" }}>Package : PI 5 - Tridion training</li>
                            <li className="toBeContinue" style={{ "grid-column": "44/49", "background-color": "#2ecaac" }}>Package : PI 6 - Tridion training</li>

                            <li className="stripes" style={{ "grid-column": "1/11", "background-color": "#2ecaac" }}>Package : PI 2 - Tridion handover</li>
                            <li style={{ "grid-column": "11/22", "background-color": "#2ecaac" }}>Package : PI 3 - Tridion handover</li>
                            <li style={{ "grid-column": "22/33", "background-color": "#2ecaac" }}>Package : PI 4 - Tridion handover</li>
                            <li style={{ "grid-column": "33/44", "background-color": "#2ecaac" }}>Package : PI 5 - Tridion handover</li>
                            <li className="toBeContinue" style={{ "grid-column": "44/49", "background-color": "#2ecaac" }}>Package : PI 6 - Tridion handover</li>

                        </ul>
                    </div>
                    <div className="gantt__row">
                        <div className="gantt__row-first" style={{ borderLeft: '10px solid #81ecec' }}>
                            Sanaâ El haydia
			            </div>
                        <ul className="gantt__row-bars">
                            <li className="stripes" style={{ "grid-column": "1/11", "background-color": "#2ecaac" }}>Package : PI 2 - Tridion design</li>
                            <li style={{ "grid-column": "11/22", "background-color": "#2ecaac" }}>Package : PI 3 - Tridion design</li>
                            <li style={{ "grid-column": "22/33", "background-color": "#2ecaac" }}>Package : PI 4 - Tridion design</li>
                            <li style={{ "grid-column": "33/44", "background-color": "#2ecaac" }}>Package : PI 5 - Tridion design</li>
                            <li className="toBeContinue" style={{ "grid-column": "44/49", "background-color": "#2ecaac" }}>Package : PI 6 - Tridion design</li>

                            <li className="stripes" style={{ "grid-column": "1/11", "background-color": "#2ecaac" }}>Package : PI 2 - Tridion training</li>
                            <li style={{ "grid-column": "11/22", "background-color": "#2ecaac" }}>Package : PI 3 - Tridion training</li>
                            <li style={{ "grid-column": "22/33", "background-color": "#2ecaac" }}>Package : PI 4 - Tridion training</li>
                            <li style={{ "grid-column": "33/44", "background-color": "#2ecaac" }}>Package : PI 5 - Tridion training</li>
                            <li className="toBeContinue" style={{ "grid-column": "44/49", "background-color": "#2ecaac" }}>Package : PI 6 - Tridion training</li>

                            <li className="stripes" style={{ "grid-column": "1/11", "background-color": "#2ecaac" }}>Package : PI 2 - Tridion handover</li>
                            <li style={{ "grid-column": "11/22", "background-color": "#2ecaac" }}>Package : PI 3 - Tridion handover</li>
                            <li style={{ "grid-column": "22/33", "background-color": "#2ecaac" }}>Package : PI 4 - Tridion handover</li>
                            <li style={{ "grid-column": "33/44", "background-color": "#2ecaac" }}>Package : PI 5 - Tridion handover</li>
                            <li className="toBeContinue" style={{ "grid-column": "44/49", "background-color": "#2ecaac" }}>Package : PI 6 - Tridion handover</li>
                        </ul>
                    </div>
                    <div className="gantt__row">
                        <div className="gantt__row-first" style={{ borderLeft: '10px solid #81ecec' }}>
                            Sopheang Nou<img className="lead" src={START_SVG} alt="lead" />
                        </div>
                        <ul className="gantt__row-bars">
                            <li className="stripes" style={{ "grid-column": "1/11", "background-color": "#a29bfe" }}>Package : PI 2 - Tests management</li>
                            <li style={{ "grid-column": "11/22", "background-color": "#a29bfe" }}>Package : PI 3 - Tests management</li>
                            <li style={{ "grid-column": "22/33", "background-color": "#a29bfe" }}>Package : PI 4 - Tests management</li>
                            <li style={{ "grid-column": "33/44", "background-color": "#a29bfe" }}>Package : PI 5 - Tests management</li>
                            <li className="toBeContinue" style={{ "grid-column": "44/49", "background-color": "#a29bfe" }}>Package : PI 6 - Tests management</li>

                            <li className="stripes" style={{ "grid-column": "1/11", "background-color": "#a29bfe" }}>Package : PI 2 - Business rules analyzis</li>
                            <li className="" style={{ "grid-column": "11/22", "background-color": "#a29bfe" }}>Package : PI 3 - Business rules analyzis</li>
                            <li className="" style={{ "grid-column": "22/33", "background-color": "#a29bfe" }}>Package : PI 4 - Business rules analyzis</li>
                            <li className="" style={{ "grid-column": "33/44", "background-color": "#a29bfe" }}>Package : PI 5 - Business rules analyzis</li>
                            <li className="toBeContinue" style={{ "grid-column": "44/49", "background-color": "#a29bfe" }}>Package : PI 6 - Business rules analyzis</li>

                            <li className="stripes permanent" style={{ "grid-column": "1/11", "background-color": "#a29bfe" }}>Package : PI 2 - Tests execution</li>
                            <li className="permanent" style={{ "grid-column": "11/22", "background-color": "#a29bfe" }}>Package : PI 3 - Tests execution</li>
                            <li className="permanent" style={{ "grid-column": "22/33", "background-color": "#a29bfe" }}>Package : PI 4 - Tests execution</li>
                            <li className="permanent" style={{ "grid-column": "33/44", "background-color": "#a29bfe" }}>Package : PI 5 - Tests execution</li>
                            <li className="permanent toBeContinue" style={{ "grid-column": "44/49", "background-color": "#a29bfe" }}>Package : PI 5 - Tests execution</li>

                        </ul>
                    </div>

                    <div className="gantt__row">
                        <div className="gantt__row-first" style={{ borderLeft: '10px solid #81ecec' }}>
                            Robin Ancelin
			            </div>
                        <ul className="gantt__row-bars">

                            <li className="stripes" style={{ "grid-column": "1/11", "background-color": "#a29bfe" }}>Package : PI 2 - Business rules analyzis</li>
                            <li className="" style={{ "grid-column": "11/22", "background-color": "#a29bfe" }}>Package : PI 3 - Business rules analyzis</li>
                            <li className="" style={{ "grid-column": "22/33", "background-color": "#a29bfe" }}>Package : PI 4 - Business rules analyzis</li>
                            <li className="" style={{ "grid-column": "33/44", "background-color": "#a29bfe" }}>Package : PI 5 - Business rules analyzis</li>
                            <li className="toBeContinue" style={{ "grid-column": "44/49", "background-color": "#a29bfe" }}>Package : PI 6 - Business rules analyzis</li>

                            <li className="stripes " style={{ "grid-column": "1/11", "background-color": "#a29bfe" }}>Package : PI 2 - Tests execution</li>
                            <li className="" style={{ "grid-column": "11/22", "background-color": "#a29bfe" }}>Package : PI 3 - Tests execution</li>
                            <li className="" style={{ "grid-column": "22/33", "background-color": "#a29bfe" }}>Package : PI 4 - Tests execution</li>
                            <li className="" style={{ "grid-column": "33/44", "background-color": "#a29bfe" }}>Package : PI 5 - Tests execution</li>
                            <li className="toBeContinue" style={{ "grid-column": "44/49", "background-color": "#a29bfe" }}>Package : PI 5 - Tests execution</li>

                        </ul>
                    </div>

                    <div className="gantt__row">
                        <div className="gantt__row-first" style={{ borderLeft: '10px solid #81ecec' }}>
                            Nouha Messaoud
			            </div>
                        <ul className="gantt__row-bars">

                            <li className="stripes" style={{ "grid-column": "1/11", "background-color": "#a29bfe" }}>Package : PI 2 - Business rules analyzis</li>
                            <li className="" style={{ "grid-column": "11/22", "background-color": "#a29bfe" }}>Package : PI 3 - Business rules analyzis</li>
                            <li className="" style={{ "grid-column": "22/33", "background-color": "#a29bfe" }}>Package : PI 4 - Business rules analyzis</li>
                            <li className="" style={{ "grid-column": "33/44", "background-color": "#a29bfe" }}>Package : PI 5 - Business rules analyzis</li>
                            <li className="toBeContinue" style={{ "grid-column": "44/49", "background-color": "#a29bfe" }}>Package : PI 6 - Business rules analyzis</li>

                            <li className="stripes " style={{ "grid-column": "1/11", "background-color": "#a29bfe" }}>Package : PI 2 - Tests execution</li>
                            <li className="" style={{ "grid-column": "11/22", "background-color": "#a29bfe" }}>Package : PI 3 - Tests execution</li>
                            <li className="" style={{ "grid-column": "22/33", "background-color": "#a29bfe" }}>Package : PI 4 - Tests execution</li>
                            <li className="" style={{ "grid-column": "33/44", "background-color": "#a29bfe" }}>Package : PI 5 - Tests execution</li>
                            <li className="toBeContinue" style={{ "grid-column": "44/49", "background-color": "#a29bfe" }}>Package : PI 5 - Tests execution</li>

                        </ul>
                    </div>
                    <div className="gantt__row">
                        <div className="gantt__row-first" style={{ borderLeft: '10px solid #81ecec' }}>
                            Mariem Chaalali
			            </div>
                        <ul className="gantt__row-bars">

                            <li className="stripes" style={{ "grid-column": "1/11", "background-color": "#a29bfe" }}>Package : PI 2 - Business rules analyzis</li>
                            <li className="" style={{ "grid-column": "11/22", "background-color": "#a29bfe" }}>Package : PI 3 - Business rules analyzis</li>
                            <li className="" style={{ "grid-column": "22/33", "background-color": "#a29bfe" }}>Package : PI 4 - Business rules analyzis</li>
                            <li className="" style={{ "grid-column": "33/44", "background-color": "#a29bfe" }}>Package : PI 5 - Business rules analyzis</li>
                            <li className="toBeContinue" style={{ "grid-column": "44/49", "background-color": "#a29bfe" }}>Package : PI 6 - Business rules analyzis</li>

                            <li className="stripes " style={{ "grid-column": "1/11", "background-color": "#a29bfe" }}>Package : PI 2 - Tests execution</li>
                            <li className="" style={{ "grid-column": "11/22", "background-color": "#a29bfe" }}>Package : PI 3 - Tests execution</li>
                            <li className="" style={{ "grid-column": "22/33", "background-color": "#a29bfe" }}>Package : PI 4 - Tests execution</li>
                            <li className="" style={{ "grid-column": "33/44", "background-color": "#a29bfe" }}>Package : PI 5 - Tests execution</li>
                            <li className="toBeContinue" style={{ "grid-column": "44/49", "background-color": "#a29bfe" }}>Package : PI 5 - Tests execution</li>

                        </ul>
                    </div>
                    <div className="gantt__row">
                        <div className="gantt__row-first" style={{ borderLeft: '10px solid #81ecec' }}>
                            Soumaya
			            </div>
                        <ul className="gantt__row-bars">

                            <li className="stripes" style={{ "grid-column": "1/11", "background-color": "#a29bfe" }}>Package : PI 2 - Business rules analyzis</li>
                            <li className="" style={{ "grid-column": "11/22", "background-color": "#a29bfe" }}>Package : PI 3 - Business rules analyzis</li>
                            <li className="" style={{ "grid-column": "22/33", "background-color": "#a29bfe" }}>Package : PI 4 - Business rules analyzis</li>
                            <li className="" style={{ "grid-column": "33/44", "background-color": "#a29bfe" }}>Package : PI 5 - Business rules analyzis</li>
                            <li className="toBeContinue" style={{ "grid-column": "44/49", "background-color": "#a29bfe" }}>Package : PI 6 - Business rules analyzis</li>

                            <li className="stripes " style={{ "grid-column": "1/11", "background-color": "#a29bfe" }}>Package : PI 2 - Tests execution</li>
                            <li className="" style={{ "grid-column": "11/22", "background-color": "#a29bfe" }}>Package : PI 3 - Tests execution</li>
                            <li className="" style={{ "grid-column": "22/33", "background-color": "#a29bfe" }}>Package : PI 4 - Tests execution</li>
                            <li className="" style={{ "grid-column": "33/44", "background-color": "#a29bfe" }}>Package : PI 5 - Tests execution</li>
                            <li className="toBeContinue" style={{ "grid-column": "44/49", "background-color": "#a29bfe" }}>Package : PI 5 - Tests execution</li>

                        </ul>
                    </div>
                    <div className="gantt__row">
                        <div className="gantt__row-first" style={{ borderLeft: '10px solid #81ecec' }}>
                            Mohamed Zehraoui
			            </div>
                        <ul className="gantt__row-bars">

                            <li className="stripes" style={{ "grid-column": "1/11", "background-color": "#a29bfe" }}>Package : PI 2 - Business rules analyzis</li>
                            <li className="" style={{ "grid-column": "11/22", "background-color": "#a29bfe" }}>Package : PI 3 - Business rules analyzis</li>
                            <li className="" style={{ "grid-column": "22/33", "background-color": "#a29bfe" }}>Package : PI 4 - Business rules analyzis</li>
                            <li className="" style={{ "grid-column": "33/44", "background-color": "#a29bfe" }}>Package : PI 5 - Business rules analyzis</li>
                            <li className="toBeContinue" style={{ "grid-column": "44/49", "background-color": "#a29bfe" }}>Package : PI 6 - Business rules analyzis</li>

                            <li className="stripes " style={{ "grid-column": "1/11", "background-color": "#a29bfe" }}>Package : PI 2 - Tests execution</li>
                            <li className="" style={{ "grid-column": "11/22", "background-color": "#a29bfe" }}>Package : PI 3 - Tests execution</li>
                            <li className="" style={{ "grid-column": "22/33", "background-color": "#a29bfe" }}>Package : PI 4 - Tests execution</li>
                            <li className="" style={{ "grid-column": "33/44", "background-color": "#a29bfe" }}>Package : PI 5 - Tests execution</li>
                            <li className="toBeContinue" style={{ "grid-column": "44/49", "background-color": "#a29bfe" }}>Package : PI 5 - Tests execution</li>

                        </ul>
                    </div>

                    <div className="gantt__row">
                        <div className="gantt__row-first" style={{ borderLeft: '10px solid #81ecec' }}>
                            William Nguyen
			            </div>
                        <ul className="gantt__row-bars">
                            <li className="stripes" style={{ "grid-column": "1/11", "background-color": "#e84393" }}>Package : PI 2 - Content management</li>
                            <li style={{ "grid-column": "11/22", "background-color": "#e84393" }}>Package : PI 3 - Content management</li>
                            <li style={{ "grid-column": "22/33", "background-color": "#e84393" }}>Package : PI 4 - Content management</li>
                            <li style={{ "grid-column": "33/44", "background-color": "#e84393" }}>Package : PI 5 - Content management</li>
                            <li className="toBeContinue" style={{ "grid-column": "44/49", "background-color": "#e84393" }}>Package : PI 6 - Content management</li>
                        </ul>
                    </div>

                    <div className="gantt__row" style={{ background: '#636e72' }}>
                        <div className="gantt__row-first" style={{ background: '#636e72' }}></div>
                        <ul className="gantt__row-bars"></ul>
                    </div>

                    <div className="gantt__row">
                        <div className="gantt__row-first" style={{ borderLeft: '10px solid #fdcb6e' }}>
                            Bruno Ravet<img className="lead" src={START_SVG} alt="lead" />
                        </div>
                        <ul className="gantt__row-bars">
                            <li className="stripes" style={{ "grid-column": "1/11", "background-color": "#2ecaac" }}>D4TH : PI 1 - Tridion design</li>
                            <li style={{ "grid-column": "11/22", "background-color": "#2ecaac" }}>D4TH : PI 2 - Tridion design</li>
                            <li style={{ "grid-column": "22/33", "background-color": "#2ecaac" }}>D4TH : PI 3 - Tridion design</li>
                            <li style={{ "grid-column": "33/44", "background-color": "#2ecaac" }}>D4TH : PI 4 - Tridion design</li>
                            <li className="toBeContinue" style={{ "grid-column": "44/49", "background-color": "#2ecaac" }}>D4TH : PI 5 - Tridion design</li>

                            <li className="stripes" style={{ "grid-column": "1/11", "background-color": "#2ecaac" }}>D4TH : PI 1 - Tridion training</li>
                            <li style={{ "grid-column": "11/22", "background-color": "#2ecaac" }}>D4TH : PI 2 - Tridion training</li>
                            <li style={{ "grid-column": "22/33", "background-color": "#2ecaac" }}>D4TH : PI 3 - Tridion training</li>
                            <li style={{ "grid-column": "33/44", "background-color": "#2ecaac" }}>D4TH : PI 4 - Tridion training</li>
                            <li className="toBeContinue" style={{ "grid-column": "44/49", "background-color": "#2ecaac" }}>D4TH : PI 5 - Tridion training</li>

                            <li className="stripes" style={{ "grid-column": "1/11", "background-color": "#2ecaac" }}>D4TH : PI 1 - Tridion handover</li>
                            <li style={{ "grid-column": "11/22", "background-color": "#2ecaac" }}>D4TH : PI 2 - Tridion handover</li>
                            <li style={{ "grid-column": "22/33", "background-color": "#2ecaac" }}>D4TH : PI 3 - Tridion handover</li>
                            <li style={{ "grid-column": "33/44", "background-color": "#2ecaac" }}>D4TH : PI 4 - Tridion handover</li>
                            <li className="toBeContinue" style={{ "grid-column": "44/49", "background-color": "#2ecaac" }}>D4TH : PI 5 - Tridion handover</li>

                        </ul>
                    </div>

                    <div className="gantt__row">
                        <div className="gantt__row-first" style={{ borderLeft: '10px solid #fdcb6e' }}>
                            David Tang
			            </div>
                        <ul className="gantt__row-bars">
                            <li className="stripes" style={{ "grid-column": "1/11", "background-color": "#2ecaac" }}>D4TH : PI 1 - Tridion design</li>
                            <li style={{ "grid-column": "11/22", "background-color": "#2ecaac" }}>D4TH : PI 2 - Tridion design</li>
                            <li style={{ "grid-column": "22/33", "background-color": "#2ecaac" }}>D4TH : PI 3 - Tridion design</li>
                            <li style={{ "grid-column": "33/44", "background-color": "#2ecaac" }}>D4TH : PI 4 - Tridion design</li>
                            <li className="toBeContinue" style={{ "grid-column": "44/49", "background-color": "#2ecaac" }}>D4TH : PI 5 - Tridion design</li>

                            <li className="stripes" style={{ "grid-column": "1/11", "background-color": "#2ecaac" }}>D4TH : PI 1 - Tridion training</li>
                            <li style={{ "grid-column": "11/22", "background-color": "#2ecaac" }}>D4TH : PI 2 - Tridion training</li>
                            <li style={{ "grid-column": "22/33", "background-color": "#2ecaac" }}>D4TH : PI 3 - Tridion training</li>
                            <li style={{ "grid-column": "33/44", "background-color": "#2ecaac" }}>D4TH : PI 4 - Tridion training</li>
                            <li className="toBeContinue" style={{ "grid-column": "44/49", "background-color": "#2ecaac" }}>D4TH : PI 5 - Tridion training</li>

                            <li className="stripes" style={{ "grid-column": "1/11", "background-color": "#2ecaac" }}>D4TH : PI 1 - Tridion handover</li>
                            <li style={{ "grid-column": "11/22", "background-color": "#2ecaac" }}>D4TH : PI 2 - Tridion handover</li>
                            <li style={{ "grid-column": "22/33", "background-color": "#2ecaac" }}>D4TH : PI 3 - Tridion handover</li>
                            <li style={{ "grid-column": "33/44", "background-color": "#2ecaac" }}>D4TH : PI 4 - Tridion handover</li>
                            <li className="toBeContinue" style={{ "grid-column": "44/49", "background-color": "#2ecaac" }}>D4TH : PI 5 - Tridion handover</li>

                        </ul>
                    </div>

                    <div className="gantt__row">
                        <div className="gantt__row-first" style={{ borderLeft: '10px solid #fdcb6e' }}>
                            Yoann Leon<img className="lead" src={START_SVG} alt="lead" />
                        </div>
                        <ul className="gantt__row-bars">
                            <li className="stripes" style={{ "grid-column": "1/11", "background-color": "#a29bfe" }}>D4TH : PI 1 - Tests management</li>
                            <li style={{ "grid-column": "11/22", "background-color": "#a29bfe" }}>D4TH : PI 2 - Tests management</li>
                            <li style={{ "grid-column": "22/33", "background-color": "#a29bfe" }}>D4TH : PI 3 - Tests management</li>
                            <li style={{ "grid-column": "33/44", "background-color": "#a29bfe" }}>D4TH : PI 4 - Tests management</li>
                            <li className="toBeContinue" style={{ "grid-column": "44/49", "background-color": "#a29bfe" }}>D4TH : PI 5 - Tests management</li>

                            <li className="stripes permanent" style={{ "grid-column": "1/11", "background-color": "#a29bfe" }}>D4TH : PI 1 - Tests execution</li>
                            <li className="permanent" style={{ "grid-column": "11/22", "background-color": "#a29bfe" }}>D4TH : PI 2 - Tests execution</li>
                            <li className="permanent" style={{ "grid-column": "22/33", "background-color": "#a29bfe" }}>D4TH : PI 3 - Tests execution</li>
                            <li className="permanent" style={{ "grid-column": "33/44", "background-color": "#a29bfe" }}>D4TH : PI 4 - Tests execution</li>
                            <li className="permanent toBeContinue" style={{ "grid-column": "44/49", "background-color": "#a29bfe" }}>D4TH : PI 5 - Tests execution</li>

                        </ul>
                    </div>

                    <div className="gantt__row">
                        <div className="gantt__row-first" style={{ borderLeft: '10px solid #fdcb6e' }}>
                            Quentin Six
			            </div>
                        <ul className="gantt__row-bars">
                            <li className="stripes " style={{ "grid-column": "1/11", "background-color": "#a29bfe" }}>D4TH : PI 1 - Tests execution</li>
                            <li className="" style={{ "grid-column": "11/22", "background-color": "#a29bfe" }}>D4TH : PI 2 - Tests execution</li>
                            <li className="" style={{ "grid-column": "22/33", "background-color": "#a29bfe" }}>D4TH : PI 3 - Tests execution</li>
                            <li className="" style={{ "grid-column": "33/44", "background-color": "#a29bfe" }}>D4TH : PI 4 - Tests execution</li>
                            <li className="toBeContinue" style={{ "grid-column": "44/49", "background-color": "#a29bfe" }}>D4TH : PI 5 - Tests execution</li>

                        </ul>
                    </div>

                    <div className="gantt__row">
                        <div className="gantt__row-first" style={{ borderLeft: '10px solid #fdcb6e' }}>
                            Serge Ndjoh Eyoum
			            </div>
                        <ul className="gantt__row-bars">
                            <li className="stripes " style={{ "grid-column": "1/11", "background-color": "#a29bfe" }}>D4TH : PI 1 - Tests execution</li>
                            <li className="" style={{ "grid-column": "11/22", "background-color": "#a29bfe" }}>D4TH : PI 2 - Tests execution</li>
                            <li className="" style={{ "grid-column": "22/33", "background-color": "#a29bfe" }}>D4TH : PI 3 - Tests execution</li>
                            <li className="" style={{ "grid-column": "33/44", "background-color": "#a29bfe" }}>D4TH : PI 4 - Tests execution</li>
                            <li className="toBeContinue" style={{ "grid-column": "44/49", "background-color": "#a29bfe" }}>D4TH : PI 5 - Tests execution</li>

                        </ul>
                    </div>

                    <div className="gantt__row">
                        <div className="gantt__row-first" style={{ borderLeft: '10px solid #fdcb6e' }}>
                            Yoan De La Roche
			            </div>
                        <ul className="gantt__row-bars">
                            <li className="stripes " style={{ "grid-column": "1/11", "background-color": "#a29bfe" }}>D4TH : PI 1 - Tests execution</li>
                            <li className="" style={{ "grid-column": "11/22", "background-color": "#a29bfe" }}>D4TH : PI 2 - Tests execution</li>
                            <li className="" style={{ "grid-column": "22/33", "background-color": "#a29bfe" }}>D4TH : PI 3 - Tests execution</li>
                            <li className="" style={{ "grid-column": "33/44", "background-color": "#a29bfe" }}>D4TH : PI 4 - Tests execution</li>
                            <li className="toBeContinue" style={{ "grid-column": "44/49", "background-color": "#a29bfe" }}>D4TH : PI 5 - Tests execution</li>

                        </ul>
                    </div>

                    <div className="gantt__row" style={{ background: '#636e72' }}>
                        <div className="gantt__row-first" style={{ background: '#636e72' }}></div>
                        <ul className="gantt__row-bars"></ul>
                    </div>

                    <div className="gantt__row">
                        <div className="gantt__row-first" style={{ borderLeft: '10px solid #e84393' }}>
                            Raji Mejdoub<img className="lead" src={START_SVG} alt="lead" />
                        </div>
                        <ul className="gantt__row-bars">
                            <li className="stripes" style={{ "grid-column": "1/11", "background-color": "#2ecaac" }}>D4TH APP APP : PI 1 - Tridion design</li>
                            <li style={{ "grid-column": "11/22", "background-color": "#2ecaac" }}>D4TH APP APP : PI 2 - Tridion design</li>
                            <li style={{ "grid-column": "22/33", "background-color": "#2ecaac" }}>D4TH APP APP : PI 3 - Tridion design</li>
                            <li style={{ "grid-column": "33/44", "background-color": "#2ecaac" }}>D4TH APP APP : PI 4 - Tridion design</li>
                            <li className="toBeContinue" style={{ "grid-column": "44/49", "background-color": "#2ecaac" }}>D4TH APP APP : PI 5 - Tridion design</li>

                            <li className="stripes" style={{ "grid-column": "1/11", "background-color": "#2ecaac" }}>D4TH APP APP : PI 1 - Tridion training</li>
                            <li style={{ "grid-column": "11/22", "background-color": "#2ecaac" }}>D4TH APP APP : PI 2 - Tridion training</li>
                            <li style={{ "grid-column": "22/33", "background-color": "#2ecaac" }}>D4TH APP APP : PI 3 - Tridion training</li>
                            <li style={{ "grid-column": "33/44", "background-color": "#2ecaac" }}>D4TH APP APP : PI 4 - Tridion training</li>
                            <li className="toBeContinue" style={{ "grid-column": "44/49", "background-color": "#2ecaac" }}>D4TH APP APP : PI 5 - Tridion training</li>

                            <li className="stripes" style={{ "grid-column": "1/11", "background-color": "#2ecaac" }}>D4TH APP APP : PI 1 - Tridion handover</li>
                            <li style={{ "grid-column": "11/22", "background-color": "#2ecaac" }}>D4TH APP APP : PI 2 - Tridion handover</li>
                            <li style={{ "grid-column": "22/33", "background-color": "#2ecaac" }}>D4TH APP APP : PI 3 - Tridion handover</li>
                            <li style={{ "grid-column": "33/44", "background-color": "#2ecaac" }}>D4TH APP APP : PI 4 - Tridion handover</li>
                            <li className="toBeContinue" style={{ "grid-column": "44/49", "background-color": "#2ecaac" }}>D4TH APP APP : PI 5 - Tridion handover</li>

                        </ul>
                    </div>

                    <div className="gantt__row">
                        <div className="gantt__row-first" style={{ borderLeft: '10px solid #e84393' }}>
                            Nassima Ait Braham<img className="lead" src={START_SVG} alt="lead" />
                        </div>
                        <ul className="gantt__row-bars">
                            <li className="stripes" style={{ "grid-column": "1/11", "background-color": "#a29bfe" }}>D4TH APP : PI 1 - Tests management</li>
                            <li style={{ "grid-column": "11/22", "background-color": "#a29bfe" }}>D4TH APP : PI 2 - Tests management</li>
                            <li style={{ "grid-column": "22/33", "background-color": "#a29bfe" }}>D4TH APP : PI 3 - Tests management</li>
                            <li style={{ "grid-column": "33/44", "background-color": "#a29bfe" }}>D4TH APP : PI 4 - Tests management</li>
                            <li className="toBeContinue" style={{ "grid-column": "44/49", "background-color": "#a29bfe" }}>D4TH APP : PI 5 - Tests management</li>

                            <li className="stripes permanent" style={{ "grid-column": "1/11", "background-color": "#a29bfe" }}>D4TH APP : PI 1 - Tests execution</li>
                            <li className="permanent" style={{ "grid-column": "11/22", "background-color": "#a29bfe" }}>D4TH APP : PI 2 - Tests execution</li>
                            <li className="permanent" style={{ "grid-column": "22/33", "background-color": "#a29bfe" }}>D4TH APP : PI 3 - Tests execution</li>
                            <li className="permanent" style={{ "grid-column": "33/44", "background-color": "#a29bfe" }}>D4TH APP : PI 4 - Tests execution</li>
                            <li className="permanent toBeContinue" style={{ "grid-column": "44/49", "background-color": "#a29bfe" }}>D4TH APP : PI 5 - Tests execution</li>

                        </ul>
                    </div>

                    <div className="gantt__row">
                        <div className="gantt__row-first" style={{ borderLeft: '10px solid #e84393' }}>
                            Fatma Ikache
			            </div>
                        <ul className="gantt__row-bars">
                            <li className="stripes " style={{ "grid-column": "1/11", "background-color": "#a29bfe" }}>D4TH APP : PI 1 - Tests execution</li>
                            <li className="" style={{ "grid-column": "11/22", "background-color": "#a29bfe" }}>D4TH APP : PI 2 - Tests execution</li>
                            <li className="" style={{ "grid-column": "22/33", "background-color": "#a29bfe" }}>D4TH APP : PI 3 - Tests execution</li>
                            <li className="" style={{ "grid-column": "33/44", "background-color": "#a29bfe" }}>D4TH APP : PI 4 - Tests execution</li>
                            <li className="toBeContinue" style={{ "grid-column": "44/49", "background-color": "#a29bfe" }}>D4TH APP : PI 5 - Tests execution</li>

                        </ul>
                    </div>

                    <div className="gantt__row">
                        <div className="gantt__row-first" style={{ borderLeft: '10px solid #e84393' }}>
                            Sonia Latrache
			            </div>
                        <ul className="gantt__row-bars">
                            <li className="stripes " style={{ "grid-column": "1/11", "background-color": "#a29bfe" }}>D4TH APP : PI 1 - Tests execution</li>
                            <li className="" style={{ "grid-column": "11/22", "background-color": "#a29bfe" }}>D4TH APP : PI 2 - Tests execution</li>
                            <li className="" style={{ "grid-column": "22/33", "background-color": "#a29bfe" }}>D4TH APP : PI 3 - Tests execution</li>
                            <li className="" style={{ "grid-column": "33/44", "background-color": "#a29bfe" }}>D4TH APP : PI 4 - Tests execution</li>
                            <li className="toBeContinue" style={{ "grid-column": "44/49", "background-color": "#a29bfe" }}>D4TH APP : PI 5 - Tests execution</li>

                        </ul>
                    </div>

                    <div className="gantt__row">
                        <div className="gantt__row-first" style={{ borderLeft: '10px solid #e84393' }}>
                            Bilel Amri
			            </div>
                        <ul className="gantt__row-bars">
                            <li className="stripes " style={{ "grid-column": "1/11", "background-color": "#a29bfe" }}>D4TH APP : PI 1 - Tests execution</li>
                            <li className="" style={{ "grid-column": "11/22", "background-color": "#a29bfe" }}>D4TH APP : PI 2 - Tests execution</li>
                            <li className="" style={{ "grid-column": "22/33", "background-color": "#a29bfe" }}>D4TH APP : PI 3 - Tests execution</li>
                            <li className="" style={{ "grid-column": "33/44", "background-color": "#a29bfe" }}>D4TH APP : PI 4 - Tests execution</li>
                            <li className="toBeContinue" style={{ "grid-column": "44/49", "background-color": "#a29bfe" }}>D4TH APP : PI 5 - Tests execution</li>

                        </ul>
                    </div>

                    <div className="gantt__row">
                        <div className="gantt__row-first" style={{ borderLeft: '10px solid #e84393' }}>
                            Ilham Terfas
			            </div>
                        <ul className="gantt__row-bars">
                            <li className="stripes " style={{ "grid-column": "1/11", "background-color": "#a29bfe" }}>D4TH APP : PI 1 - Tests execution</li>
                            <li className="" style={{ "grid-column": "11/22", "background-color": "#a29bfe" }}>D4TH APP : PI 2 - Tests execution</li>
                            <li className="" style={{ "grid-column": "22/33", "background-color": "#a29bfe" }}>D4TH APP : PI 3 - Tests execution</li>
                            <li className="" style={{ "grid-column": "33/44", "background-color": "#a29bfe" }}>D4TH APP : PI 4 - Tests execution</li>
                            <li className="toBeContinue" style={{ "grid-column": "44/49", "background-color": "#a29bfe" }}>D4TH APP : PI 5 - Tests execution</li>

                        </ul>
                    </div>


                </div>
            </React.Fragment>
        );
    }
}

export default Gantt;
