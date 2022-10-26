import React, { Component } from "react";
import SpeechRecognition from "react-speech-recognition";
import "./App.css";

const options = {
  autoStart: false,
  continous: false
};

class Dictaphone extends Component {
  render() {
    const {
      listening,
      transcript,
      interimTranscript,
      browserSupportsSpeechRecognition
    } = this.props;

    const handleListen = event => {
      this.props.startListening();
      if (listening) {
        this.props.abortListening();
      }
      event.target.classList.toggle("record");
    };

    const resetListen = () => {
      this.props.resetTranscript();
    };

    if (!browserSupportsSpeechRecognition) {
      return null;
    }

    return (
      <div className="container">
        <p>Red button to start/stop recording your voice.</p>
        Black button to Reset.
        <div className="wrapper">
          <button className="button start" onClick={handleListen} />
          <button className="button reset" onClick={resetListen} />
          {/* <div id="interim" className="interim">
            {interimTranscript}
          </div> */}
          <div id="final" className="final">
            {transcript}
          </div>
        </div>
        <p>Note: This Voice Recognition only supports Google Chrome.</p>
      </div>
    );
  }
}

export default SpeechRecognition(options)(Dictaphone);
