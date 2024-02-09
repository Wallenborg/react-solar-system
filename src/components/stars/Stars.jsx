import React, { useState, useEffect } from "react";
import "./stars.css";

function Stars() {
  // const [isDivVisible, setIsDivVisible] = useState(false);

  // useEffect(() => {
  //   let scrollTimer;

  //   const handleScroll = () => {
  //     setIsDivVisible(true);

  //     // Reset the timeout timer if it's already running
  //     clearTimeout(scrollTimer);

  //     // Set a timeout to hide the div after 2000 ms (2 seconds) of inactivity
  //     scrollTimer = setTimeout(() => {
  //       setIsDivVisible(false);
  //     }, 800);
  //   };

  //   // Listen for the scroll event
  //   window.addEventListener("scroll", handleScroll);

  //   // Clean up any resources when the component is unmounted
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //     clearTimeout(scrollTimer);
  //   };
  // }, []);

  const [isDivVisible, setIsDivVisible] = useState(false);

  useEffect(() => {
    let scrollTimer;

    const handleScroll = () => {
      // Check if the scroll position is greater than or equal to 3839 pixels
      if (window.scrollY >= 3839) {
        setIsDivVisible(true);
      } else {
        setIsDivVisible(false);
      }

      // Reset the timeout timer if it's already running
      clearTimeout(scrollTimer);

      // Set a timeout to hide the div after 2000 ms (2 seconds) of inactivity
      scrollTimer = setTimeout(() => {
        setIsDivVisible(false);
      }, 800);
    };

    // Listen for the scroll event
    window.addEventListener("scroll", handleScroll);

    // Clean up any resources when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimer);
    };
  }, []);

  return (
    <div className="box-flex">
      <div
        className="box-round"
        style={{
          display: isDivVisible ? "flex" : "none",
          transition: "opacity 0.3s ease-in-out",
        }}
      >
        <div class="star star00"></div>
        <div className="star star01"></div>
        <div className="star star02"></div>
        <div clasNames="star star03"></div>
        <div className="star star04"></div>
        <div className="star star05"></div>
        <div className="star star06"></div>
        <div className="star star07"></div>
        <div className="star star08"></div>
        <div className="star star09"></div>
        <div className="star star10"></div>
        <div className="star star11"></div>
        <div className="star star12"></div>
        <div className="star star13"></div>
        <div className="star star14"></div>
        <div className="star star15"></div>
        <div className="star star16"></div>
        <div className="star star17"></div>
        <div className="star star18"></div>
        <div className="star star19"></div>
        <div className="star star20"></div>
        <div className="star star21"></div>
        <div className="star star22"></div>
        <div className="star star23"></div>
        <div className="star star24"></div>
        <div className="star star25"></div>
        <div className="star star26"></div>
        <div className="star star27"></div>
        <div className="star star28"></div>
        <div clasNames="star star29"></div>
        <div className="star star30"></div>
        <div className="star star31"></div>
        <div className="star star32"></div>
        <div className="star star33"></div>
        <div className="star star34"></div>
        <div className="star star35"></div>
        <div className="star star36"></div>
        <div className="star star37"></div>
        <div className="star star38"></div>
        <div className="star star39"></div>
        <div className="star star40"></div>
        <div className="star star41"></div>
        <div className="star star42"></div>
        <div className="star star43"></div>
        <div className="star star44"></div>
        <div className="star star45"></div>
        <div className="star star46"></div>
        <div className="star star47"></div>
        <div className="star star48"></div>
        <div className="star star49"></div>
        <div className="star star50"></div>
        <div className="star star51"></div>
        <div className="star star52"></div>
        <div className="star star53"></div>
        <div className="star star54"></div>
        <div className="star star55"></div>
        <div className="star star56"></div>
        <div className="star star57"></div>
        <div className="star star58"></div>
        <div className="star star59"></div>
        <div className="star star60"></div>
        <div className="star star61"></div>
        <div className="star star62"></div>
        <div className="star star63"></div>
        <div className="star star64"></div>
        <div className="star star65"></div>
        <div className="star star66"></div>
        <div className="star star67"></div>
        <div className="star star68"></div>
        <div className="star star69"></div>
        <div className="star star70"></div>
        <div className="star star71"></div>
        <div className="star star72"></div>
        <div className="star star73"></div>
        <div className="star star74"></div>
        <div className="star star75"></div>
        <div className="star star76"></div>
        <div className="star star77"></div>
        <div className="star star78"></div>
        <div className="star star79"></div>
        <div className="star star80"></div>
        <div className="star star81"></div>
        <div className="star star82"></div>
        <div className="star star83"></div>
        <div className="star star84"></div>
        <div className="star star85"></div>
        <div className="star star86"></div>
        <div className="star star87"></div>
        <div className="star star88"></div>
        <div className="star star89"></div>
        <div className="star star90"></div>
        <div className="star star91"></div>
        <div className="star star92"></div>
        <div className="star star93"></div>
        <div className="star star94"></div>
        <div className="star star95"></div>
        <div className="star star96"></div>
        <div className="star star97"></div>
        <div className="star star98"></div>
        <div className="star star99"></div>
        <div className="star star100"></div>
        <div className="star star101"></div>
        <div className="star star102"></div>
        <div className="star star103"></div>
        <div className="star star104"></div>
        <div className="star star105"></div>
        <div className="star star106"></div>
        <div className="star star107"></div>
        <div className="star star108"></div>
        <div className="star star109"></div>
        <div className="star star110"></div>
        <div className="star star111"></div>
        <div className="star star112"></div>
        <div className="star star113"></div>
        <div className="star star114"></div>
        <div className="star star115"></div>
        <div className="star star116"></div>
        <div className="star star117"></div>
        <div className="star star118"></div>
        <div className="star star119"></div>
        <div className="star star120"></div>
        <div className="star star121"></div>
        <div className="star star122"></div>
        <div className="star star123"></div>
        <div className="star star124"></div>
        <div className="star star125"></div>
        <div className="star star126"></div>
        <div className="star star127"></div>
        <div className="star star128"></div>
        <div className="star star129"></div>
        <div className="star star130"></div>
        <div className="star star131"></div>
        <div className="star star132"></div>
        <div className="star star133"></div>
        <div className="star star134"></div>
      </div>
    </div>
  );
}

export default Stars;
