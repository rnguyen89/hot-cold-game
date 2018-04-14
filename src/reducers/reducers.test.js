import reducer from './reducer';
import {restartGame, makeGuess } from '../actions/actions';

describe('Reducer', () => {
    it('Should set inital state when noting is passed in', () => {
        const state = reducer(undefined, {type: '__UNKNOWN'});

        expect(state.guesses).toEqual([]);
        expect(state.feedback).toEqual('Make your guess!');
        expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
        expect(state.correctAnswer).toBeLessThanOrEqual(100);
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = reducer(currentState, {type: '__UNKNOWN'});

        expect(state).toBe(currentState);
    });

    describe('restartGame', () => {
        it('Should start a new game', () => {
            let state = {
                guesses: [1, 2, 3, 4],
                feedback: 'Awesome',
                correctAnswer: 4
            };
            const correctAnswer = 10;
            state = reducer(state, restartGame(correctAnswer));
            expect(state.guesses).toEqual([]);
            expect(state.feedback).toEqual('Make your guess!');
            expect(state.correctAnswer).toEqual(correctAnswer);
        });
    });

    describe('makeGuess', () => {
        it('Should make a guess', () => {
            let state = {
                guesses: [],
                feedback: '',
                correctAnswer: 100
            };

            state = reducer(state, makeGuess(25));
            expect(state.guesses).toEqual([25]);
            expect(state.feedback).toEqual("You're Ice Cold...");

            state = reducer(state, makeGuess(60));
            expect(state.guesses).toEqual([25, 60]);
            expect(state.feedback).toEqual("You're Cold...");

            state = reducer(state, makeGuess(80));
            expect(state.guesses).toEqual([25, 60, 80]);
            expect(state.feedback).toEqual("You're Warm.");

            state = reducer(state, makeGuess(95));
            expect(state.guesses).toEqual([25, 60, 80, 95]);
            expect(state.feedback).toEqual("You're Hot!");

            state = reducer(state, makeGuess(100));
            expect(state.guesses).toEqual([25, 60, 80, 95, 100]);
            expect(state.feedback).toEqual('You got it!');
        });
    });

})