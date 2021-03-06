import React, { Component } from 'react';
import '../GeneralCSS/Accordion.css';


class AccordionTest extends Component {
  render() {
    return (
      <div class="container">
    <div class="row">
        <div class="content">
            <div class="panel-group" id="accordion">
                <div class="panel panel-default">
                    <div class="panel-heading">
                         <h4 class="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                          Suzuki
                        </a>
                      </h4>

                    </div>
                    <div id="collapseOne" class="panel-collapse collapse in">
                        <div class="panel-body">
                            <img src="http://files.conceptcarz.com/img/Suzuki/suzuki-concept-kizashi-3-2008-01-800.jpg" />
                        </div>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-heading">
                         <h4 class="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                  Chevrolet
                </a>
              </h4>

                    </div>
                    <div id="collapseTwo" class="panel-collapse collapse">
                        <div class="panel-body">
                            <img src="http://www.wallsave.com/wallpapers/800x400/zl-camaro/65234/zl-camaro-chevrolet-carbon-concept-car-65234.jpg" />
                        </div>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-heading">
                         <h4 class="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
                  Volvo
                </a>
              </h4>

                    </div>
                    <div id="collapseThree" class="panel-collapse collapse">
                        <div class="panel-body">
                            <img src="http://files.conceptcarz.com/img/Volvo/2009_Volvo_S60_Concept-Image-01-800.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    );
  }
}

export default AccordionTest;
