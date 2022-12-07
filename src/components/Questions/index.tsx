import React, { useState, useRef } from 'react';
import { Checkbox, Slider, Collapse, NumberInput, Button, Box } from '@mantine/core';
import { questionsList, resultsList } from '../../utils/questionsList';
import { useStyles } from './styles';

export default function Questions() {
  const { classes, cx } = useStyles();

  const checkboxValues: Array<number> = [];
  const sliderValues: Array<number> = []

  for (let i = 0; i < questionsList.length; i++) {
    for (let j = 0; j < questionsList[i].questions.length; j++) {
      checkboxValues[questionsList[i].questions[j].id] = questionsList[i].questions[j].value ?? 0;
      sliderValues[questionsList[i].questions[j].id] = questionsList[i].questions[j].slider?.value ?? 0;
    }
  }

  const [opened, setOpened] = useState(new Array(2).fill(false));
  const [points, setPoints] = useState(0);

  const [inhabitants, setInhabitants] = useState(1);
  const [checkboxState, setCheckboxState] = useState(new Array<boolean>(checkboxValues.length).fill(false));
  const [sliderState, setSliderState] = useState(new Array<number>(sliderValues.length).fill(0));

  const inhabitantsRef = useRef(inhabitants);
  const checkboxStateRef = useRef(checkboxState);
  const sliderStateRef = useRef(sliderState);

  const setInhabitantsRef = (data: number) => {
    inhabitantsRef.current = data;
    setInhabitants(data);
  };

  const setCheckboxStateRef = (data: Array<boolean>) => {
    checkboxStateRef.current = data;
    setCheckboxState(data);
  };

  const setSliderStateRef = (data: Array<number>) => {
    sliderStateRef.current = data;
    setSliderState(data);
  };

  const checkboxChange = (id: number) => {
    const updatedCheckboxState: Array<boolean> = checkboxStateRef.current.map((item, index) =>
      index === id ? !item : item
    );

    setCheckboxStateRef(updatedCheckboxState);
    updateScore(updatedCheckboxState, sliderStateRef.current, inhabitants);
  }

  const sliderChange = (state: number, id: number) => {
    const updatedSliderState: Array<number> = sliderStateRef.current.map((item, index) =>
      index === id ? state : item
    );

    setSliderStateRef(updatedSliderState);
    updateScore(checkboxStateRef.current, updatedSliderState, inhabitants);
  }

  const updateScore = (updatedCheckboxState: Array<boolean>, updatedSliderState: Array<number>, updatedInhabitants: number) => {
    var totalPoints: number = 145;

    totalPoints += updatedCheckboxState.reduce(
      (sum: number, state: boolean, index: number) => {
        if (state === true) {
          if (index >= 11 && index <= 15) {
            return sum + checkboxValues[index] / updatedInhabitants;
          }
          return sum + checkboxValues[index];
        }
        return sum;
      },
      0
    );

    totalPoints += updatedSliderState.reduce(
      (sum: number, state: number, index: number) => {
        return sum + sliderValues[index] * state;
      },
      0
    );

    if (updatedCheckboxState.every(value => value === false) && updatedSliderState.every(value => value === 0))
      setPoints(0);
    else
      setPoints(totalPoints);
  }

  const renderResult = (result: number) => {
    result = Math.round(result * 2)

    for (let i = resultsList.length - 1; i >= 0; i--) {
      if (result >= resultsList[i].boundary) {
        return (
          <div>
            <div className={classes.center}>
              <h2>Twój wynik to {result}
                {((String(result).slice(-1) === '2' ||
                  String(result).slice(-1) === '3' ||
                  String(result).slice(-1) === '4') &&
                  String(result).slice(-2, -1) !== '1') ? ' punkty' : ' punktów'}
              </h2>
            </div>

            {result > 0 ?
              <>
                <br />
                Każdy punkt jest równoważny 0,01 ha &ndash; to oznacza, że {result}
                {((String(result).slice(-1) === '2' ||
                  String(result).slice(-1) === '3' ||
                  String(result).slice(-1) === '4') &&
                  String(result).slice(-2, -1) !== '1') ? ' punkty odpowiadają' : ' punktów odpowiada'}
                &nbsp;{(Math.round(result * 0.01 * 100) / 100).toString().replaceAll('.', ',')} ha planety.&nbsp;
                {resultsList[i].text}
              </> :
              null}
          </div>
        )
      }
    }
  }

  return (
    <>
      <div className={cx(classes.rectangle, classes.center)}>
        <div>
          <h1 style={{ lineHeight: '2rem' }}>Czy wystarczy nam Ziemi? Kalkulator śladu ekologicznego</h1>
          <p><br />Wybierz wszystkie odpowiedzi, które są najbliższe Twojemu stylowi życia</p>
        </div>
      </div>

      {questionsList.map((area) => {
        return (
          <div key={area.title} className={classes.rectangle}>
            <div className={classes.center}>
              <h2>{area.title}</h2>
            </div>
            <br />
            <>
              {area.questions.map((question) => {
                if (question.value !== undefined) {
                  return (
                    <div key={question.id}>
                      <Checkbox
                        onChange={() => checkboxChange(question.id)}
                        radius={4}
                        size='md'
                        color='green'
                        label={
                          <div className={classes.checkboxText}>
                            {question.content}
                          </div>
                        }
                      />
                      <span className={classes.break}></span>
                    </div>
                  )
                }
                else if (question.slider !== undefined) {
                  return (
                    <div key={question.id}>
                      <br />
                      <div className={classes.center}>
                        {question.content}
                      </div>
                      <Slider
                        onChangeEnd={(state) => sliderChange(state, question.id)}
                        color='green'
                        min={question.slider.min}
                        max={question.slider.max}
                        defaultValue={question.slider.min}
                        label={(value) => `${value}${question.slider?.label ?? ''}`}
                        step={question.slider.step ?? 1}
                        marks={[
                          { value: 0.2 * (question.slider.max - question.slider.min), label: `${0.2 * (question.slider.max - question.slider.min)}${question.slider?.label ?? ''}` },
                          { value: 0.5 * (question.slider.max - question.slider.min), label: `${0.5 * (question.slider.max - question.slider.min)}${question.slider?.label ?? ''}` },
                          { value: 0.8 * (question.slider.max - question.slider.min), label: `${0.8 * (question.slider.max - question.slider.min)}${question.slider?.label ?? ''}` },
                        ]}
                        classNames={{
                          root: classes.sliderRoot,
                          label: classes.sliderLabel,
                          markLabel: classes.sliderMarkLabel,
                        }}
                      />
                    </div>
                  )
                }

              })}
              {area.title === 'MIESZKANIE' ?
                <>
                  <div>
                    <div className={classes.center}>
                      Ile osób mieszka w Twoim domu?
                    </div>
                    <Slider
                      onChangeEnd={(state) => {
                        setInhabitantsRef(state)
                        updateScore(checkboxStateRef.current, sliderStateRef.current, state)
                      }}
                      color='green'
                      min={1}
                      max={11}
                      defaultValue={1}
                      marks={[
                        { value: 3, label: '3' },
                        { value: 6, label: '6' },
                        { value: 9, label: '9' },
                      ]}
                      classNames={{
                        root: classes.sliderRoot,
                        label: classes.sliderLabel,
                        markLabel: classes.sliderMarkLabel,
                      }}
                    />
                  </div>
                </> :
                null}
            </>
          </div>
        );
      })}

      <Box className={classes.buttonBox}>
        <Button
          onClick={() => setOpened((o) => [!o[0], o[1]])}
          classNames={{ root: classes.buttonRoot }}
        >
          Zobacz wynik
        </Button>
      </Box>

      <Collapse in={opened[0]} transitionDuration={400}>
        <div className={cx(classes.rectangle, classes.results)}>
          {renderResult(points)}

          {points !== 0 ?
            <>
              <br />
              <div className={classes.center}>
                <h2>Co możesz zmienić?</h2>
              </div>
              <br />
              Poniżej znajdziesz Twoje nawyki, które pozostawiają najwyższy ślad ekologiczny. Rezygnując z nich bezpośrednio przyczynisz się do poprawy kondycji naszej planety.
            </> :
            null}
        </div>

        <Box className={classes.buttonBox}>
          <Button
            onClick={() => setOpened((o) => [o[0], !o[1]])}
            classNames={{ root: classes.buttonRoot }}
          >
            Zobacz szczegóły
          </Button>
        </Box>

        <Collapse in={opened[1]} transitionDuration={400}>
          <div className={cx(classes.rectangle, classes.results)}>
            {resultsList.map((result, index, results) => {
              return (
                <div key={result.boundary}>
                  {result.boundary === 800 ?
                    <>ponad 800 pkt.&nbsp;&ndash;&nbsp;</> :
                    <>{result.boundary}&nbsp;-&nbsp;{results[index + 1].boundary}&nbsp;pkt.&nbsp;&ndash;&nbsp;</>}
                  {result.text}
                  {result.boundary === 800 ? null : <><br /><br /></>}
                </div>
              )
            })}
          </div>
        </Collapse>
      </Collapse>
    </>
  )
}
