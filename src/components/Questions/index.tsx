import React, { useState, useRef } from 'react';
import { Checkbox, Slider, Collapse, Button, Box, Center, Space } from '@mantine/core';
import { useStyles } from './styles';
import questionsList from '../../utils/questions.json';
import QuestionCard from '../QuestionCard';

type ResultsProps = {
  boundary: number;
  text: string;
}

const resultsList: ResultsProps[] = [
  { boundary: 0, text: 'Dobra robota, żyjesz, prawie nie przekraczając swego udziału w ziemskich zasobach. Gdyby każdy żył tak jak Ty, prowadzilibyśmy styl życia określany mianem zrównoważonego. Prawie 70% ludności na Ziemi żyje w ten sposób' },
  { boundary: 200, text: 'Twój ślad jest mniejszy niż średnia europejska. Gdyby każdy żył jak Ty, potrzebowalibyśmy dodatkowej planety, by sprostać konsumpcji. Około 15% ludności żyje w ten sposób.' },
  { boundary: 400, text: 'Twój ślad odpowiada średniej europejskiej, przekracza trzykrotnie Twój udział w ziemskich zasobach. Gdyby każdy żył jak Ty, potrzebne by były dwie dodatkowe planety. Około 7% ludności żyje w ten sposób.' },
  { boundary: 600, text: 'Twój ślad przekracza średnią europejską. Gdyby cała ludzkość prowadziła taki styl życia, potrzebne by były jeszcze trzy dodatkowe planety. Około 3% ludności żyje w ten sposób.' },
  { boundary: 800, text: 'Twój ślad zbliżył się do tego, jaki pozostawia przeciętny Amerykanin. By sprostać takiej konsumpcji, potrzeba jeszcze czterech planet. Żyje tak około 5% ludzi.' },
];

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

  const renderResultTitle = (result: number) => {
    result = Math.round(result * 2);

    return (`Twój wynik to ${result} ${((String(result).slice(-1) === '2' ||
      String(result).slice(-1) === '3' ||
      String(result).slice(-1) === '4') &&
      String(result).slice(-2, -1) !== '1') ? ' punkty' : ' punktów'
      }`);
  }

  const renderResultContent = (result: number) => {
    result = Math.round(result * 2);

    for (let i = resultsList.length - 1; i >= 0; i--) {
      if (result >= resultsList[i].boundary) {
        return (
          <>
            {result > 0 ?
              <>
                Każdy punkt jest równoważny 0,01 ha &ndash; to oznacza, że {result}
                {((String(result).slice(-1) === '2' ||
                  String(result).slice(-1) === '3' ||
                  String(result).slice(-1) === '4') &&
                  String(result).slice(-2, -1) !== '1') ? ' punkty odpowiadają' : ' punktów odpowiada'}
                &nbsp;{(Math.round(result * 0.01 * 100) / 100).toString().replaceAll('.', ',')} ha planety.&nbsp;
                {resultsList[i].text}
              </> :
              null}
          </>
        );
      }
    }
  }

  return (
    <>
      <div className={classes.wrapper} style={{ paddingTop: '20px' }}>
        <QuestionCard title="Czy wystarczy nam Ziemi? Kalkulator śladu ekologicznego">
          <Center>
            Wybierz wszystkie odpowiedzi, które są najbliższe Twojemu stylowi życia
          </Center>
        </QuestionCard>

        {questionsList.map((area) => {
          return (
            <QuestionCard key={area.title} title={area.title}>
              {area.questions.map((question) => {
                if (question.value !== undefined) {
                  return (
                    <div key={question.id}>
                      <Checkbox
                        onChange={() => checkboxChange(question.id)}
                        radius={4}
                        size='md'
                        color='green'
                        label={question.content}
                      />
                      <Space h="sm" />
                    </div>
                  )
                }
                else if (question.slider !== undefined) {
                  return (
                    <div key={question.id}>
                      <br />
                      <Center>
                        {question.content}
                      </Center>
                      <Slider
                        onChangeEnd={(state) => sliderChange(state, question.id)}
                        color='green'
                        min={question.slider.min}
                        max={question.slider.max}
                        defaultValue={question.slider.min}
                        label={(value) => `${value}${question.slider?.label}`}
                        size="lg"
                        step={question.slider.step}
                        marks={[
                          { value: 0.2 * (question.slider.max - question.slider.min), label: `${0.2 * (question.slider.max - question.slider.min)}${question.slider.label}` },
                          { value: 0.5 * (question.slider.max - question.slider.min), label: `${0.5 * (question.slider.max - question.slider.min)}${question.slider.label}` },
                          { value: 0.8 * (question.slider.max - question.slider.min), label: `${0.8 * (question.slider.max - question.slider.min)}${question.slider.label}` },
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
              {area.title === 'Mieszkanie' ?
                <>
                  <Center>
                    Ile osób mieszka w Twoim domu?
                  </Center>
                  <Slider
                    onChangeEnd={(state) => {
                      setInhabitantsRef(state)
                      updateScore(checkboxStateRef.current, sliderStateRef.current, state)
                    }}
                    color='green'
                    min={1}
                    max={11}
                    defaultValue={1}
                    size="lg"
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
                </> :
                null}
            </QuestionCard>
          );
        })}

        <Button
          onClick={() => setOpened((o) => [!o[0], o[1]])}
          className={classes.control}
          variant='white'
          size='lg'
        >
          Zobacz wynik
        </Button>
      </div>

      <Collapse in={opened[0]} transitionDuration={400}>
        <div className={classes.wrapper}>
          <QuestionCard title={renderResultTitle(points)}>
            {renderResultContent(points)}
          </QuestionCard>

          <Button
            onClick={() => setOpened((o) => [o[0], !o[1]])}
            className={classes.control}
            variant='white'
            size='lg'
          >
            Zobacz szczegóły
          </Button>
        </div>

        <Collapse in={opened[1]} transitionDuration={400}>
          <div className={classes.wrapper}>
            <QuestionCard>
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
            </QuestionCard>
          </div>
        </Collapse>
      </Collapse>
    </>
  )
}
