import React from "react";
import { Link } from "react-router-dom";
function NotfoundPage() {
  return (
    <div className="container">
      <h1>404 NOT FOUND</h1>
      <div class="row justify-content-center">
        <div class="col-md-4 service text-center">
          <a
            class="btn btn-dark"
            href="https://naot0.github.io/portfolio-react/"
            role="button"
          >
            Topに戻る
          </a>
        </div>
      </div>
    </div>
  );
}

export default NotfoundPage;
