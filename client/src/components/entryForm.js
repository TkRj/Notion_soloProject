import "./entryForm.css";
import { useState } from "react";
import SaveIcon from "@mui/icons-material/Save";
import Button from "@mui/material/Button";
import EmojiObjectsTwoToneIcon from "@mui/icons-material/EmojiObjectsTwoTone";
const Entryform = ({ onSubmitHandler }) => {
  // const [prompt, setPrompt] = useState(false);
  const [promptMessage, setPromptMessage] = useState("");

  const Prompts = [
    "What kind of day are you having, and why?",
    "Where are you happiest? Describe that place.",
    `What's something you're good at? What makes you good at it?`,
    'What do you consider to be your culture, and how do you feel about it?',
    'What would you change about yourself or your life? Is there a way for you to change it?',
    'What is your relationship like with various members of your family?',
    'What keeps you up at night worrying? Are your worries realistic? Is there anything you can do about them?',
    'Do you have a philosophy of life? If so, what is it? If not, what is your method for making important decisions?',
    'In what areas are you optimistic, and in what areas are you pessimistic?',
    'What is a book, movie, song, or television program that has influenced you, and how?',
    'What is a mistake people often make about you?',
    'Describe your dream: job, man/woman, house.',
    `How would you like your life to be when you're older?`,
    'What magic power would you like to have? How would you use it? What would it feel like?'

  ];

  console.log(prompt, promptMessage);
  function journalPrompt(e) {
    e.preventDefault();
    let i = Math.floor(Math.random() * Prompts.length);
    setPromptMessage(Prompts[i]);

    // setPrompt(!prompt);
  }

  return (
    //setState
    <div className="form-container">
      <form className="form-box" onSubmit={onSubmitHandler}>
        <div className="label">
          <input
            name="title"
            type="text"
            placeholder="Title..."
            autoComplete="off"
          ></input>
          <a>
            <EmojiObjectsTwoToneIcon onClick={journalPrompt} />
          </a>
          <br></br>
        </div>
        <div className="label">
          <input name="date" type="datetime-local"></input>
          <br></br>{" "}
          {promptMessage ? (
            <span>
              {promptMessage}{" "}
              <button onClick={() => setPromptMessage("")}>Off</button>
            </span>
          ) : (
            ""
          )}
        </div>
        <div className="label">
          <textarea
            name="entry"
            rows="10"
            placeholder="Write here.."
            autoComplete="off"
          ></textarea>
          <br></br>
        </div>
        <Button variant="outlined" endIcon={<SaveIcon />} type="submit">
          SAVE
        </Button>
        {/* <button id="createbtn" type="submit" ><SaveIcon/></button> */}
      </form>
    </div>
  );
};

export default Entryform;
