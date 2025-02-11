import React from "react";
import { Button } from "react-bootstrap";
import reactImage from "../Images/react.png";
import pythonImage from "../Images/python.png";
import gasImage from "../Images/gas.png";
import LineBotImage from "../Images/LINEboticon.png";

function HomePage() {
  return (
    <div className="container text-center">
      <section class="page-section" id="services">
        <div className="service">
          <div class="text-center">
            <h1 class="section-heading text-uppercase">PORTFOLIO</h1>
            <h3 class="section-subheading text-muted mb-5">作品一覧</h3>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-4 service text-center">
              <a href="https://lin.ee/SNEduDo">
                <img
                  src={LineBotImage}
                  class="mx-auto d-block"
                  className="img-fluid rounded hover-zoom"
                />
              </a>
              <h4 class="my-3">LINEBot</h4>
              <p class="text-muted">
                Google Apps
                Scriptを用いて学寮食堂の献立の確認が行えるLINEBotを作製しました。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skill">
        <div class="text-center">
          <h1 class="title">スキル</h1>
          <div class="row text-center">
            <div class="col-md-4 services">
              <img src={reactImage} />
              <h4>React</h4>
              <p>このサイトはReactで構成されています</p>
            </div>
            <div class="col-md-4 services">
              <img src={gasImage} />
              <h4>Google Apps Script</h4>
              <p>Google Apps Script学習中</p>
            </div>
            <div class="col-md-4 services">
              <img src={pythonImage} />
              <h4>python</h4>
              <p>pythonがつかえます</p>
            </div>
          </div>
          <button type="button" class="btn btn-primary">
            スキル一覧
          </button>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
