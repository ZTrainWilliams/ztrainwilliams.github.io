/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="https://github.com/ZTrainWilliams"
                target="_blank"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://juejin.cn/user/1116759543253640/posts"
                target="_blank"
              >
                Blog
              </a>
            </li>
          </ul>
        </nav>
        {/* <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed by{" "}
          <a
            href="https://www.invisionapp.com?ref=nukr-dark-footer"
            target="_blank"
          >
            Invision
          </a>
          . Coded by{" "}
          <a
            href="https://www.creative-tim.com?ref=nukr-dark-footer"
            target="_blank"
          >
            Creative Tim
          </a>
          .
        </div> */}
      </Container>
    </footer>
  );
}

export default DarkFooter;
