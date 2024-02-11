import React from "react";

const About = () => {

    const licenseText_isItHealthy = `
MIT License

Copyright (c) 2023 Hirusha Adikari
                
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
  `

    const licenseText_react = `
MIT License

Copyright (c) Meta Platforms, Inc. and affiliates.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
  `

    const licenseText_materialui = `
The MIT License (MIT)

Copyright (c) 2014 Call-Em-All

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
  `

  return (
    <>
    <h1 className="center-stuff">About</h1>
    <div>
      <p>
        Welcome to "Is it Healthy?" - your ultimate guide to making healthier choices and staying informed about
        the food you consume! In a world where artificial additives are prevalent in the majority of food items,
        it's crucial to understand the potential health risks they may pose. With our website, and the Android
        app, we provide you with the tools and information necessary to select your meals wisely.
        <br></br>
        <br></br>
        I recognize the importance of maintaining a healthy lifestyle through mindful eating. This platform
        empowers you to take control of your health by easily accessing information about the additives
        contained in the food you plan to purchase and consume. By simply entering the INS codes of additives
        found on food labels, you can instantly uncover the potential health risks associated with them.
        <br></br>
        <br></br>
        This user-friendly interface ensures that you can make informed decisions about the food you choose to
        eat. Whether you're at the grocery store, a restaurant, or planning your meals at home, "Is it Healthy?"
        gives you the peace of mind you deserve. By understanding the impact of additives on your health, you
        can take proactive steps towards a healthier, more nourishing lifestyle.
        <br></br>
        <br></br>
        Discover the hidden truths behind the food you eat and embark on a journey of informed and healthier
        choices with "Is it Healthy?" Start using my website, or my Android app today and take the first
        step towards a healthier you.
      </p>
      <br></br>
      <h2 className="center-stuff">built by <a href="https://github.com/is-it-healthy">@hirushaadi</a></h2>
      <hr></hr>
      <div className="center-stuff code">

        <h1 className="center-stuff">License</h1>
        <pre style={{ overflowY: 'auto' }} dangerouslySetInnerHTML={{ __html: licenseText_isItHealthy }} />

        <h1 className="center-stuff">Other Licenses</h1>
        <h2 className="center-stuff">
          <a href="https://github.com/facebook/react/blob/main/LICENSE">
            React
          </a>
        </h2>
        <pre style={{ overflowY: 'auto', maxHeight: 'auto' }} dangerouslySetInnerHTML={{ __html: licenseText_react }} />

        <h2 className="center-stuff">
          <a href="https://github.com/mui/material-ui/blob/master/LICENSE">
            Material UI
          </a>
        </h2>
        <pre style={{ overflowY: 'auto', maxHeight: 'auto' }} dangerouslySetInnerHTML={{ __html: licenseText_materialui }} />
        <h2 className="center-stuff">built by @hirushaadi</h2>
      </div>
    </div>
  </>
    );
};

export default About;



