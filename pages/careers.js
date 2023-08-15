import React, { useState, useRef } from "react";
import Head from 'next/head';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import Swal from 'sweetalert2';

const CustomMenuIcon = ({ isOpen, onClick }) => {
  const barsStyle = {
    width: '30px',
    height: '5px',
    background: '#000',
    margin: '6px 0',
    borderRadius: '2px',
    transformOrigin: '4px',
    transition: '0.5s',
  };

  return (
    <div onClick={onClick}>
      <div style={barsStyle} className={isOpen ? 'open' : ''}></div>
      <div style={barsStyle} className={isOpen ? 'open' : ''}></div>
      <div style={barsStyle} className={isOpen ? 'open' : ''}></div>
    </div>
  );
};

const Careers = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [skills, setSkills] = useState("");
  const [city, setCity] = useState("");
  const [linkone, setLinkOne] = useState("");
  const [linktwo, setLinkTwo] = useState("");
  const [linkthree, setLinkThree] = useState("");
  const [file, setFile] = useState(null);

  async function handlesubmit(event) {
    event.preventDefault();
    if (step < 4) {
      if (validateStep(step)) {
        setStep((prevStep) => prevStep + 1);
      } else {
        Swal.fire({
          title: "Please fill in all the required fields.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } else if (step === 4) {
      setSubmitted(true);
      setStep(1); // Reset the step to 1
    }

    if (step === 4 && validateStep(step)) {
      Swal.fire({
        title: 'Thank you for reaching out!',
        text: 'We appreciate your interest & will contact you soon.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      // Reset the form fields
      setFname("");
      setLname("");
      setCity("");
      setLinkOne("");
      setLinkTwo("");
      setLinkThree("");
      setFile("");
    }
  }

  const validateStep = (step) => {
    switch (step) {
      case 1:
        return fname !== "" && lname !== "";
      case 2:
        return city !== "";
      case 3:
        return linkone !== "";
      case 4:
        return file !== null;
      default:
        return true;
    }
  };

  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep((prevStep) => prevStep - 1);
    }
  };

  const handleReset = () => {
    setStep(1);
    setSubmitted(false);
  };

  const renderFormContent = () => {
    if (submitted) {
      setTimeout(() => {
        setSubmitted(false);
        setStep(1);
      }, 3000);
    }

    switch (step) {
      case 1:
        return (
          <div className="step ptt form-group">
            <h5 className="jobs-txt">Hi there! What’s your name?</h5>
            <input
              className="form-control"
              type="text"
              placeholder="First Name"
              value={fname} name="fname" onChange={(e) => { setFname(e.target.value) }}
            />
            <br />
            <input
              className="form-control"
              type="text"
              placeholder="Last Name"
              value={lname} name="lname" onChange={(e) => { setLname(e.target.value) }}
            />
          </div>
        );
      case 2:
        return (
          <div className="ptt form-group">
            <step>
              <h5 className="jobs-txt">Thanks, Maher . What’s your email?</h5>
              <div className="step">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Email is required*"
                  value={city} name="city" onChange={(e) => { setCity(e.target.value) }}
                />
              </div>
            </step>
          </div>
        );

      case 3:
        return (
          <div className="ptt form-group">
            <div className="step">
              <h5 className="jobs-txt">
                Please drop any links you’d like us to see here (portfolio,
                LinkedIn etc…)
              </h5>
              <input
                className="form-control"
                type="text"
                placeholder="ex: https://www.example.com"
                value={linkone} name="linkone" onChange={(e) => { setLinkOne(e.target.value) }}
              />
              <br />
            </div>
            <div className="step">
              <input
                className="form-control"
                type="text"
                placeholder="ex 2: https://www.example.com"
                value={linktwo} name="linktwo" onChange={(e) => { setLinkTwo(e.target.value) }}
              />
              <br />
            </div>
            <div className="step">
              <input
                className="form-control"
                type="text"
                placeholder="ex 3: https://www.example.com"
                value={linkthree} name="linkthree" onChange={(e) => { setLinkThree(e.target.value) }}
              />
              <br />
            </div>
          </div>
        );

      case 4:
        return (
          <div className='dashed'>
            <div className="col-sm-12 col-md-6">
              <p className="text-white lead upload-file">Upload File [pdf, jpeg, docx, ppt]</p>
              <div className="form-group">
                <input type="file" name="file" onChange={(e) => { setFile(e.target.files[0]) }} className="form-control-file" id="fileUpload" />
              </div>
            </div>
          </div>
        );
    }
  };


  const getStepLabel = () => {
    switch (step) {
      case 1:
        return "Personal Information";
      case 2:
        return "Experience";
      case 3:
        return "Education";
      case 4:
        return "Attachments";
      default:
        return "";
    }
  };

  const renderProgressBar = () => {
    const progress = (step / 5) * 100; // Assuming there are 5 steps in total
    return (
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
        <span className="progress-label">
          Step {step}: {getStepLabel()}
        </span>
      </div>
    );
  };

  return (
    <div>
      <Head>
        <title>Careers Page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <section>
        <div className="jobs-wrapper">
          <div className="container">
            <nav aria-label="breadcrumb pt-5">
              <ol className="breadcrumb pt-5">
                <li className="breadcrumb-item text-uppercase" ><a href="/">Home</a></li>
                <li className="breadcrumb-item active text-uppercase" aria-current="page">Careers</li>
              </ol>
            </nav>
          </div>

          <form onSubmit={handlesubmit}>
            <div className="job-application-form">
        
              <br />
              {renderFormContent()}
              <br />
              {!submitted ? (
                <div className="d-flex-next">
                  {step !== 1 && (
                    <button onClick={handlePrevious} className="previous-button">
                      Back
                    </button>
                  )}
                  <button
                    onClick={handlesubmit}
                    type="submit"
                    className={`next-button${step < 5 ? "submit-button sb" : ""}`}
                  >
                    {step < 5 ? "Next" : "Submit"}
                  </button>
                </div>
              ) : null}
                    {renderProgressBar()}
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Careers;
