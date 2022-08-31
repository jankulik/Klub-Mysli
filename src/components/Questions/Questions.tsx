import React, { useState } from 'react';
import { Checkbox, Collapse, NumberInput, Button, Box } from '@mantine/core';
import { questionsList, resultsList } from '../../utils/questionsList';
import { useStyles } from './Questions.styles';

export default function Questions() {
  const { classes, cx } = useStyles();

  let values: Array<number> = []

  for (let i = 0; i < questionsList.length; i++) {
    for (let j = 0; j < questionsList[i].questions.length; j++) {
      values.push(questionsList[i].questions[j].value)
    }
  }

  const [checkedState, setCheckedState] = useState(new Array(values.length).fill(false))
  const [total, setTotal] = useState(0)
  const [opened, setOpened] = useState(new Array(2).fill(false))
  const [inhabitants, setInhabitants] = useState(1)

  const handleOnChange = (position: number) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    )

    setCheckedState(updatedCheckedState)
    updateScore(updatedCheckedState, inhabitants)
  }

  const updateScore = (argCheckedState: Array<boolean>, updatedInhabitants: number) => {
    const totalPoints = argCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          if (index >= 11 && index <= 15) {
            return sum + values[index] / updatedInhabitants
          }
          return sum + values[index]
        }
        return sum
      },
      145
    )

    if (argCheckedState.every(value => value === false)) {
      setTotal(0)
    }
    else {
      setTotal(totalPoints)
    }
  }

  const renderResult = (result: number) => {
    result = Math.round(result * 2)

    for (let i = resultsList.length - 1; i >= 0; i--) {
      if (result >= resultsList[i].boundary) {
        return (
          <div>
            <h2>Twój wynik to {result}
              {((String(result).slice(-1) === '2' ||
                String(result).slice(-1) === '3' ||
                String(result).slice(-1) === '4') &&
                String(result).slice(-2, -1) !== '1') ? ' punkty' : ' punktów'}
            </h2>


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
      {questionsList.map((area) => {
        return (
          <div key={area.title} className={classes.rectangle}>
            <div>
              <h2>{area.title}</h2><br />
              <>
                {area.title === 'MIESZKANIE' ?
                  <>
                    Wprowadź liczbę osób mieszkających w Twoim domu:
                    <NumberInput radius={4} min={1} defaultValue={1} size='sm' value={inhabitants} onChange={(val: number) => {
                      setInhabitants(val)
                      updateScore(checkedState, val)
                    }} />
                    <span className={classes.break}></span>
                  </> :
                  null}
                {area.questions.map((question) => {
                  return (
                    <div key={question.id}>
                      <Checkbox
                        radius={4}
                        onChange={() => handleOnChange(question.id)}
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
                })}
              </>
            </div>
          </div>
        );
      })}

      <Box
        sx={(theme) => ({
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        })}
      >
        <Button>
          Zobacz wynik
        </Button>
      </Box>

      <div className={classes.buttonWrapper}>
        <button className={classes.button} onClick={() => setOpened((o) => [!o[0], o[1]])}>Zobacz wynik</button>
      </div>

      <Collapse in={opened[0]} transitionDuration={400}>
        <div className={classes.rectangle2}>
          {renderResult(total)}
        </div>

        <div className={classes.buttonWrapper}>
          <button className={classes.button} onClick={() => setOpened((o) => [o[0], !o[1]])}>Zobacz szczegóły</button>
        </div>

        <Collapse in={opened[1]} transitionDuration={400}>
          <div className={classes.rectangle2}>
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
