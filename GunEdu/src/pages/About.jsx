import React, { useEffect } from "react";
import "../App.css";

export default function About() {
  useEffect(() => {
    document.querySelector(".list").addEventListener("click", function (e) {
      if (e.target.tagName == "LI") {
        const targetPanel = document.querySelector(e.target.dataset.list);

        const panels = document.querySelectorAll(".panel");

        Array.from(panels).forEach((panel) => {
          if (panel == targetPanel) {
            panel.classList.add("active");
          } else {
            panel.classList.remove("active");
          }
        });
      }
    });
  });

  return (
    <>
      <div className="about">
        <div className="abto">
          <p>
            According to Amnesty international, more than 600 <br /> people die
            every day as a result of firearms violence
          </p>

          <p>
            The bare exitence of firearms instils a sense of fear in people.
          </p>

          <p>
            Nearly all gun violence cases occurs outside of armed conflict
            settings. <br /> Large number of firearm deaths are caused by
            suicide and accidents.
          </p>

          <p>
            This gun education app is a prototype for enlightening users of
            diverse generations, altogether <br />
            nationalities everyone on the dangers and seriousness of gun
            violence
          </p>

          <div>
            <nav>
              <ul class="list">
                <li data-list="#mission" class="active">
                  Mission
                </li>
                <li data-list="#vision">Vision</li>
              </ul>
            </nav>
          </div>
          <div class="secti">
            <div id="mission" class="panel active">
              <p>
                To educate masses on the graveness of gun violence and
                counteract it
              </p>
              <p>
                In combating gun violence, humanity is aided in preserving a
                basic human right - the right to life. In combating ignorance of
                firearms violence prevention, everyone, irrespective of gender,
                age, race, could be armed with ample immunity against firearm
                violence.
              </p>
            </div>
            <div id="vision" class="panel">
              <p>To stave off gun violence</p>
              <p>
                Everday lives can be as safe a place as possible. With improved
                sustainability and human resource empowerment, <br /> from the
                value provided, life and gun safety can unhurriedly improved.
              </p>
              <span>VALUES:</span>
              <ul>
                <li>Inclusivity</li>
                <li>Flexibilty</li>
                <li>Sustainability</li>
                <li>Affordable</li>
              </ul>
            </div>
          </div>
          <svg
            className="one"
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="200"
            fill="none"
            viewBox="0 0 47 44"
            version="1.1"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:svgjs="http://svgjs.dev/svgjs"
          >
            <path
              fill='url("#SvgjsLinearGradient1168")'
              d="M40.1 14.6c-1-.1-2.3-2.2-1.2-3.9.7-1.1 1.4-2.1.3-3.9-.8-1.4-1.7-1.2-2.7-.9-1.6.5-2.2-1.8-2.2-3.7 0-1-.5-1.9-2.3-1.9-1 0-1.5.8-2 1.7-.8 1.3-3.6 1.7-4.1.3-.5-1.4-3-1.5-4.7-.4-1.6 1.1-3.5.7-3.6.4-.2-.2-.3-.4-.4-.4-.1 0-.5-.9-1.5-1.2-.5-.2-1.1-.1-1.9.2-3 1.2-1.7 4-2.7 6.1-1.4 2.7-2.9-.3-5.5.4-1.9.5-3.3 2.8-3.3 5.2.1 2.2 3 4.7 2.7 6.3-.3 1.3-3.4-.6-4.6 3.2-.4 1.2-.2 2.3.1 3.7.6 2.9 2.1 1.7 3.3 2.9 1.4 1.5 1.6 3.1.2 4.9-2.8 3.9.5 6.7 4.3 6.1 2.1-.3 5.5-1.1 4.9.4-.3 1-1.1 2-.6 2.7 2.7 3 4.8-2 7.5-1.8h.3c.1 0 .4.2.7.4.2.2.5.3.6.4.1.1.4 1.1 1.3 1.6.5.3 1.1.5 1.8.5 1.4 0 3.5-.6 4.4-2 .3-.4.3-1.1.3-1.7.1-1 2.1-.2 4.2.1 2.9.4 5.6-1.4 4.3-5.6-.1-.3-.2-.5-.4-.7-.3-.4-.4-1 0-1.4.2-.2.5-.3.9-.2 3.9.8 6.7-.5 5.5-4-.6-1.8-4.5-2.6-1.5-3.6 1.1-.4 2.3-.8 3-2.3 1.7-3.4.5-8.6-3.8-8-.3.1-.9.2-1.6.1Z"
            ></path>
            <defs>
              <linearGradient
                gradientTransform="rotate(0 0.5 0.5)"
                id="SvgjsLinearGradient1168"
              >
                <stop
                  stop-opacity=" 1"
                  stop-color="rgba(194, 188, 32)"
                  offset="0"
                ></stop>
                <stop
                  stop-opacity=" 1"
                  stop-color="rgba(208, 134, 90)"
                  offset="0.48"
                ></stop>
                <stop
                  stop-opacity=" 1"
                  stop-color="rgba(41, 9, 16)"
                  offset="1"
                ></stop>
              </linearGradient>
            </defs>
          </svg>
          <svg
            className="two"
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="200"
            fill="none"
            viewBox="0 0 63 59"
            version="1.1"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:svgjs="http://svgjs.dev/svgjs"
          >
            <path
              fill='url("#SvgjsLinearGradient1290")'
              d="M29.8 46c-.9-1.6-3-2.1-4.5-1.1L17.1 54l3.7-11.4c-.1-1.8-1.7-3.2-3.5-3.2l-5 .2 2.3-4.4c.8-1.6.2-3.7-1.4-4.6L.1 28.1l13.1-2.4c1.6-.9 2.2-3 1.4-4.6l-2.3-4.4 5 .2c1.8.1 3.4-1.3 3.5-3.2L17.5.4l7.8 10.9c1.6 1 3.6.5 4.5-1.1l2.6-4.3 2.6 4.3c.9 1.6 3 2.1 4.5 1.1L47 2.6l-3 11.1c.1 1.8 1.7 3.2 3.5 3.2l5-.2-2.3 4.4c-.8 1.6-.2 3.7 1.4 4.6l10.9 2.5-10.9 2.4c-1.6.9-2.2 3-1.4 4.6l2.3 4.4-5-.2c-1.8-.1-3.4 1.3-3.5 3.2l5.6 15.9L39.5 45c-1.6-1-3.6-.5-4.5 1.1l-2.6 4.3-2.6-4.4Z"
            ></path>
            <defs>
              <linearGradient
                gradientTransform="rotate(0 0.5 0.5)"
                id="SvgjsLinearGradient1290"
              >
                <stop
                  stop-opacity=" 1"
                  stop-color="rgba(176, 31, 77)"
                  offset="0"
                ></stop>
                <stop
                  stop-opacity=" 1"
                  stop-color="rgba(186, 166, 27)"
                  offset="0.48"
                ></stop>
                <stop
                  stop-opacity=" 1"
                  stop-color="rgba(174, 19, 68)"
                  offset="1"
                ></stop>
              </linearGradient>
            </defs>
          </svg>
          <svg
            className="three"
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="200"
            fill="none"
            viewBox="0 0 60 60"
            version="1.1"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:svgjs="http://svgjs.dev/svgjs"
          >
            <path
              fill='url("#SvgjsLinearGradient1310")'
              d="M55.1 26.1c5.1-3.1 4.1-6.5-1.9-6.3 4.1-4.4 2.3-7.3-3.4-5.6 2.9-5.3.3-7.7-4.8-4.5 1.4-5.8-1.7-7.5-5.8-3.1-.1-6.1-3.6-6.8-6.5-1.4-1.7-5.9-5.3-5.9-6.6.1-3.2-5.1-6.5-4.1-6.3 1.9-4.4-4.1-7.3-2.3-5.6 3.5-5.3-2.8-7.7-.3-4.5 4.8-5.8-1.4-7.5 1.7-3.1 5.8-5.9.2-6.8 3.5-1.6 6.3-5.6 1.7-5.4 5.2.4 6.5-5.1 3.1-4.1 6.5 1.9 6.3-4.1 4.4-2.3 7.3 3.4 5.6-2.9 5.3-.3 7.7 4.8 4.5-1.4 5.8 1.7 7.5 5.8 3.1.1 6.1 3.6 6.8 6.5 1.4 1.7 5.9 5.3 5.9 6.6-.1 3.2 5.1 6.5 4.1 6.3-1.9 4.4 4.1 7.3 2.3 5.6-3.5 5.3 2.8 7.7.3 4.5-4.8 5.8 1.4 7.5-1.7 3.1-5.8 5.9-.2 6.8-3.5 1.6-6.3 5.6-1.8 5.4-5.2-.4-6.5Z"
            ></path>
            <defs>
              <linearGradient
                gradientTransform="rotate(0 0.5 0.5)"
                id="SvgjsLinearGradient1310"
              >
                <stop
                  stop-opacity=" 1"
                  stop-color="rgba(35, 176, 31)"
                  offset="0"
                ></stop>
                <stop
                  stop-opacity=" 1"
                  stop-color="rgba(132, 117, 6)"
                  offset="0.48"
                ></stop>
                <stop
                  stop-opacity=" 1"
                  stop-color="rgba(115, 174, 19)"
                  offset="1"
                ></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </>
  );
}
