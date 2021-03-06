import React, { Component } from "react";
import giftboxes1 from "../Images/giftboxes1.svg";
import giftboxes2 from "../Images/giftboxes2.svg";
import giftboxes3 from "../Images/giftboxes3.svg";
import giftboxes4 from "../Images/giftboxes4.svg";
import giftboxes5 from "../Images/giftboxes5.svg";
import giftboxes6 from "../Images/giftboxes6.svg";
import giftboxes7 from "../Images/giftboxes7.svg";
import giftboxes8 from "../Images/giftboxes8.svg";
import giftboxes9 from "../Images/giftboxes9.svg";
import Questions from "./Questions";
import "./giveGifts.css";
import ProductCard from "./ProductCard";
import axios from "axios";
import leftAngle from "../Images/leftAngle.PNG";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";

import ProductCardLg from "./ProductCardLg";
import { faGrinTongueSquint } from "@fortawesome/free-solid-svg-icons";

class GiveGifts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusImage: giftboxes1,
      page: 1,
      questionComponent: null,
      modalShow: false,
      gift: {
        lookingFor: " ",
        age: "",
        gender: "",
        interest: "",
        isMy: "",
        occasion: "",
        min: 1,
        max: 100,
        name: "Coworker",
        resultsSaved: false,
      },
      topTrendingResults: [],
      allResults: [],
    };
  }

  componentDidMount() {
    this.generateQuestion(this.state.page);
    this.setImage();
  }

  componentWillReceiveProps(nextProps) {
    // console.log("history push routed");
    if (nextProps.location.state !== this.props.location.state) {
      console.log(nextProps);
      console.log(nextProps.location.state.page);
      this.setState(
        (prevState) => {
          let newState = { ...prevState };
          newState.page = nextProps.location.state.page;
          return newState;
        },
        () => {
          this.nextQuestion();
        }
      );
    }
  }

  setImage = () => {
    switch (this.state.page) {
      case 1:
        this.setState((prevState) => {
          let newState = { ...prevState };
          newState.statusImage = giftboxes9;

          return newState;
        });

        break;
      case 2:
        this.setState((prevState) => {
          let newState = { ...prevState };
          newState.statusImage = giftboxes1;

          return newState;
        });

        break;
      case 3:
        this.setState((prevState) => {
          let newState = { ...prevState };
          newState.statusImage = giftboxes2;

          return newState;
        });

        break;
      case 4:
        this.setState((prevState) => {
          let newState = { ...prevState };
          newState.statusImage = giftboxes3;

          return newState;
        });

        break;
      case 5:
        this.setState((prevState) => {
          let newState = { ...prevState };
          newState.statusImage = giftboxes4;

          return newState;
        });

        break;
      case 6:
        this.setState((prevState) => {
          let newState = { ...prevState };
          newState.statusImage = giftboxes5;

          return newState;
        });

        break;
      case 7:
        this.setState((prevState) => {
          let newState = { ...prevState };
          newState.statusImage = giftboxes6;

          return newState;
        });

        break;
      case 8:
        this.setState((prevState) => {
          let newState = { ...prevState };
          newState.statusImage = giftboxes7;

          return newState;
        });

        break;
      case 9:
        this.setState((prevState) => {
          let newState = { ...prevState };
          newState.statusImage = giftboxes8;

          return newState;
        });

        break;
      case 10:
        this.setState((prevState) => {
          let newState = { ...prevState };
          newState.statusImage = giftboxes9;

          return newState;
        });

        break;
      default:
      // code block
    }
  };

  generateQuestion = (page) => {
    let header1 = "";
    let header3 = "";
    let question = "";
    let choices = "";
    let choiceState = "";

    switch (page) {
      case 1:
        header1 =
          "Lighthearted Gifts for People You Just Don't Know That Well...";
        header3 = "";

        question =
          "Secret Santa, White Elephant, work anniversaries? We know how stressful it is to pick gifts for your co-workers and acquaintances. We make it easier by providing curated gift options.";
        choices = ["Let's Get Started!"];

        this.generateQuestionComponent(
          header1,
          header3,
          question,
          choices,
          choiceState
        );
        break;
      case 2:
        header1 = "Let's find that perfect gift!";
        header3 =
          "Tell us a little about what kind of gift you would like to give.";
        question = "Are you looking for:";
        choices = ["Something Fun", "Something Practical", "Both"];
        choiceState = "lookingFor";

        this.generateQuestionComponent(
          header1,
          header3,
          question,
          choices,
          choiceState
        );
        break;
      case 3:
        header1 = "Let's find that perfect gift!";
        header3 = "Tell us a little about who your fun gift is for.";
        question = "The gift is for someone who is a:";
        choices = ["Baby", "Toddler", "Child", "Teenager", "Adult", "Senior"];
        choiceState = "age";
        this.generateQuestionComponent(
          header1,
          header3,
          question,
          choices,
          choiceState
        );
        break;
      case 4:
        header1 = "Let's find that perfect gift!";
        header3 = "Tell us a little about who your fun gift is for.";
        question = `The gift is for a ${this.state.gift.age}:`;
        choices = ["Man", "Woman", "Gender Neutral"];

        choiceState = "gender";

        this.generateQuestionComponent(
          header1,
          header3,
          question,
          choices,
          choiceState
        );
        break;
      case 5:
        header1 = "Let's find that perfect gift!";
        header3 = `Tell us a little about who your fun gift is for.`;
        question = `The gift is for a ${this.state.gift.age} ${this.state.gift.gender} who loves:`;
        choices = [
          "Art",
          "Books",
          "Cooking",
          "Crafts",
          "DIY",
          "Fashion",
          "Gadgets",
          "Outdoors",
          "Sports",
        ];
        choiceState = "interest";

        this.generateQuestionComponent(
          header1,
          header3,
          question,
          choices,
          choiceState
        );
        break;
      case 6:
        header1 = "Let's find that perfect gift!";
        header3 = `Tell us who the ${this.state.gift.age} ${this.state.gift.gender} that loves ${this.state.gift.interest} is.`;
        question = "The gift recipient is my:";
        choices = ["Acquaintance", "Co-worker", "N/A"];

        choiceState = "isMy";

        this.generateQuestionComponent(
          header1,
          header3,
          question,
          choices,
          choiceState
        );
        break;
      case 7:
        header1 = "Let's find that perfect gift!";
        header3 = `Tell us what this fun gift for my ${this.state.gift.isMy} who is a ${this.state.gift.age} ${this.state.gift.gender} that loves ${this.state.gift.interest} is for.`;
        question = "This gift is for a:";
        choices = [
          "Anniversary",
          "Birthday",
          "Congraulations",
          "Graduation",
          "Hanukkah",
          "Secret Santa",
          "Just Because",
        ];

        choiceState = "occasion";

        this.generateQuestionComponent(
          header1,
          header3,
          question,
          choices,
          choiceState
        );
        break;
      case 8:
        header1 = "Let's find that perfect gift!";
        header3 = `Tell us how much you want to spend on this fun ${this.state.gift.occasion} gift for the ${this.state.gift.age} ${this.state.gift.gender} who loves ${this.state.gift.interest}`;
        question = "I want to spend:";
        choices = ["Min", "Max"];
        choiceState = ["min", "max"];

        this.generateQuestionComponent(
          header1,
          header3,
          question,
          choices,
          choiceState
        );
        break;
      case 9:
        header1 = "We're finding you the perfect gift!";
        header3 = `While we're searching for the matching gift options, would you like to join to save your search?`;
        choices = ["Sign me up!", "Skip for now"];
        this.generateQuestionComponent(
          header1,
          header3,
          question,
          choices,
          choiceState
        );
        break;
      case 10:
        header1 = "We've searched high and low to find the perfect matches!";
        header3 = ``;
        question = `See the results for ${
          this.state.gift.lookingFor ? "fun" : false
        } ${this.state.gift.occasion} gifts for the ${
          this.state.gift.age
        } year old ${this.state.gift.gender} who loves ${
          this.state.gift.interest
        } that cost between ${this.state.gift.min} - ${this.state.gift.max}!`;
        choices = ["Save Results"];
        this.generateQuestionComponent(
          header1,
          header3,
          question,
          choices,
          choiceState
        );
        break;
      case 11:
        header1 = "We're finding you the perfect gift!";
        header3 = `Great! We're excited to have you join!`;

        choices = [
          "Sign Up with Email",
          "Sign up with Google",
          "Sign up with Facebook",
        ];
        this.generateQuestionComponent(
          header1,
          header3,
          question,
          choices,
          choiceState
        );
        break;
      case 12:
        header1 = "We're finding you the perfect gift!";
        header3 = `Great! We're excited to have you join!`;

        choices = ["Email", "Password", "Confirm Password", "Sign Up"];
        choiceState = ["email", "password", "confirmPassword", "signUp"];
        this.generateQuestionComponent(
          header1,
          header3,
          question,
          choices,
          choiceState
        );
        break;
      case 13:
        header1 = "Welcome! \n We're so happy to have you!";
        header3 = `No time to choose a gift now? \n Just save your results for later or view them now!`;

        choices = ["Save Results", "Continue to Results"];

        this.generateQuestionComponent(
          header1,
          header3,
          question,
          choices,
          choiceState
        );
        break;
      case 14:
        header1 = "No Problem! \n Your results will be here.";
        header3 = `Come back when you're ready!`;
        question = `name your results and they'll be waiting in your account page.`;
        choices = ["Name", "Save"];

        this.generateQuestionComponent(
          header1,
          header3,
          question,
          choices,
          choiceState
        );
        break;
      default:
      // code block
    }
  };

  nextQuestion = (e) => {
    if (e) {
      e.preventDefault();
      let name = e.target.name;
      let value = e.target.value;
      // console.log(name, value);

      if (value === "Sign me up!") {
        console.log("hey there");
        this.setState(
          (prevState) => {
            let newState = { ...prevState };
            newState.page = 11;

            return newState;
          },
          () => {
            this.generateQuestion(this.state.page);
            this.setImage();
          }
        );
      } else if (value === "Sign Up with Email") {
        this.setState(
          (prevState) => {
            let newState = { ...prevState };
            newState.page = 12;

            return newState;
          },
          () => {
            this.generateQuestion(this.state.page);
            this.setImage();
          }
        );
      } else {
        ///
        this.setState(
          (prevState) => {
            let newState = { ...prevState };
            newState.page = this.state.page + 1;

            if (name) {
              newState.gift[name] = value;
            }

            return newState;
          },
          () => {
            this.generateQuestion(this.state.page);
            this.setImage();
            this.getGiftResults();
          }
        );
        ///
      }
    } else {
      this.generateQuestion(this.state.page);
      this.setImage();
      this.getGiftResults();
    }
  };

  previousQuestion = () => {
    this.setState(
      (prevState) => {
        let newState = { ...prevState };
        newState.page = this.state.page - 1;
        return newState;
      },
      () => {
        this.generateQuestion(this.state.page);
        this.setImage();
      }
    );
  };

  onClickSaveResults = (e) => {
    console.log(e);
    this.setState(
      (prevState) => {
        let newState = { ...prevState };
        newState.page = 10;
        newState.gift.resultsSaved = true;
        return newState;
      },
      () => {
        this.onClickTriggerModal();
      }
    );
  };

  onClickGoToResults = () => {
    this.setState(
      (prevState) => {
        let newState = { ...prevState };
        newState.page = 10;
        return newState;
      },
      () => {
        this.generateQuestion(this.state.page);
        this.setImage();
        this.getGiftResults();
      }
    );
  };

  onClickTriggerModal = () => {
    this.generateQuestion(this.state.page);
    this.setImage();
    this.getGiftResults();
    this.setState((prevState) => {
      let newState = { ...prevState };
      newState.modalShow = !newState.modalShow;

      return newState;
    });
  };

  onClickSignUp = (e) => {
    e.preventDefault();
    this.setState(
      (prevState) => {
        let newState = { ...prevState };
        newState.page = 13;
        return newState;
      },
      () => {
        this.generateQuestion(this.state.page);
        this.setImage();
      }
    );
  };

  generateQuestionComponent = (
    header1,
    header3,
    question,
    choices,
    choiceState
  ) => {
    let component = (
      <Questions
        header1={header1}
        header3={header3}
        question={question}
        choices={choices}
        choiceState={choiceState}
        nextQuestion={this.nextQuestion}
        previousQuestion={this.previousQuestion}
        keyIndex={this.state.page}
        onHandleChange={this.onHandleChange}
        onClickSignUp={this.onClickSignUp}
        onClickSaveResults={this.onClickSaveResults}
        onClickGoToResults={this.onClickGoToResults}
      />
    );

    this.setState((prevState) => {
      let newState = { ...prevState };
      newState.questionComponent = component;
      return newState;
    });
  };

  onHandleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    console.log(name, value);
    console.log(e.target.value);
    this.setState((prevState) => {
      let newState = { ...prevState };
      newState.gift[name] = value;
      return newState;
    });
  };

  getGiftResults = () => {
    // function getData(data)

    if (this.state.page === 10) {
      const config = {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        // url: `https://cors-anywhere.herokuapp.com/https://openapi.etsy.com/v2/listings/active?api_key=19ho4058q7dgjz56jaqbqpuq&limit=30&min_price=${this.state.gift.min}&max_price=${this.state.gift.max}&keywords=${this.state.gift.lookingFor},${this.state.gift.age},${this.state.gift.gender},${this.state.gift.interest},${this.state.gift.isMy},${this.state.gift.occasion}&includes=Images`,
        // url: `https://cors-anywhere.herokuapp.com/https://openapi.etsy.com/v2/listings/active?api_key=19ho4058q7dgjz56jaqbqpuq&limit=30&min_price=${this.state.gift.min}&max_price=${this.state.gift.max}&keywords=${this.state.gift.gender},${this.state.gift.interest},${this.state.gift.occasion}&includes=Images`,
        url: `https://thingproxy.freeboard.io/fetch/https://openapi.etsy.com/v2/listings/active?api_key=19ho4058q7dgjz56jaqbqpuq&limit=30&min_price=${this.state.gift.min}&max_price=${this.state.gift.max}&keywords=${this.state.gift.gender},${this.state.gift.interest},${this.state.gift.occasion}&includes=Images`,
        // url: `https://api.allorigins.win/get?https://openapi.etsy.com/v2/listings/active?api_key=19ho4058q7dgjz56jaqbqpuq&limit=30&min_price=${this.state.gift.min}&max_price=${this.state.gift.max}&keywords=${this.state.gift.gender},${this.state.gift.interest},${this.state.gift.occasion}&includes=Images`,

        // url: `https://openapi.etsy.com/v2/listings/active?api_key=19ho4058q7dgjz56jaqbqpuq&limit=30&min_price=${this.state.gift.min}&max_price=${this.state.gift.max}&keywords=${this.state.gift.gender},${this.state.gift.interest},${this.state.gift.occasion}&includes=Images`,

        // url: `https://openapi.etsy.com/v2/listings/active.js?api_key=19ho4058q7dgjz56jaqbqpuq&limit=30&min_price=${this.state.gift.min}&max_price=${this.state.gift.max}&keywords=${this.state.gift.gender},${this.state.gift.interest},${this.state.gift.occasion}&includes=Images`,
        // url: `https://cors-anywhere.herokuapp.com/https://openapi.etsy.com/v2/listings/active?api_key=19ho4058q7dgjz56jaqbqpuq&limit=30&includes=Images`,
      };
      //used proxy to access
      return axios(config).then(this.getGiftResultsSuccess);
      // .catch(console.log("error"));
    }

    // let api = `https://openapi.etsy.com/v2/listings/active?api_key=19ho4058q7dgjz56jaqbqpuq&limit=30&min_price=${this.state.gift.min}&max_price=${this.state.gift.max}&keywords=${this.state.gift.gender},${this.state.gift.interest},${this.state.gift.occasion}&includes=Images`;
    // fetch(api)
    //   .then((response) => {
    //     if (!response.ok) throw new Error("Not OK", response.status);
    //     else return response.json();
    //   })
    //   .then((data) => {
    //     this.getGiftResultsSuccess(data);
    //     console.log("DATA CAME", api);
    //   })
    //   .catch((error) => {
    //     console.log("error catched: " + error);
    //   });
  };

  getGiftResultsSuccess = (data) => {
    let results = data.data.results;

    // console.log(results[0].title, results[0].url, results[0].price);

    this.generateProductCards(results);
  };

  generateProductCards = (results) => {
    //results is an array

    let giftComponent = results.map(this.mappedGifts);
    console.log(results);
    this.setState((prevState) => {
      let newState = { ...prevState };

      newState.topTrendingResults = giftComponent.slice(0, 6);
      newState.allResults = giftComponent.slice(6, 30);

      return newState;
    });
    // return giftComponent;
  };

  mappedGifts = (item) => {
    let image =
      item && item.Images && item.Images[0]
        ? item.Images[0].url_fullxfull
        : false;
    let title = item.title;
    let link = item.url;
    let price = item.price;

    // let openLink = "test";
    let openLink = function openLink() {
      window.open(link, "_blank");
    };
    return (
      <ProductCard
        image={image}
        title={title}
        link={link}
        price={price}
        openLink={openLink}
        key={Math.random() * this.state.page}
      />
    );
  };

  render() {
    return (
      <React.Fragment>
        {/* <ProductCardLg /> */}
        <MyVerticallyCenteredModal
          show={this.state.modalShow}
          onHide={this.onClickTriggerModal}
          savedName={this.state.gift.name}
        />
        <div className="col">
          <div className="row">
            <div
              className="col-4"
              // style={{ zIndex: "5", position: "absolute" }}
            >
              {this.state.questionComponent
                ? this.state.questionComponent
                : null}
            </div>
            {/* <div className="col-2 gift-tracker-mobile"></div> */}
            <div className="col-8 gift-tracker ">
              {/* <div className="offset-4"> */}
              <img
                className="float-right"
                src={this.state.statusImage}
                // style={{ position: "absolute" }}
                alt="giftstatus"
              />
            </div>
          </div>
          {this.state.page === 10 ? (
            <React.Fragment>
              <div className="results">
                {" "}
                <div className="row">
                  <h1>Top Trending Results</h1>
                  {/* <h1 className="float-right">See More</h1> */}
                </div>
                <div className="row">{this.state.topTrendingResults}</div>
                <div className="row">
                  <h1>All Results</h1>
                </div>
              </div>

              <div className="row results">{this.state.allResults}</div>
            </React.Fragment>
          ) : null}
          {this.state.page !== 1 ? (
            <div className="row" onClick={this.previousQuestion}>
              <img className="back-image " src={leftAngle} alt="left-angle" />
              <h3 className="back-button">Back</h3>
            </div>
          ) : null}
        </div>
      </React.Fragment>
    );
  }
}

export default GiveGifts;
