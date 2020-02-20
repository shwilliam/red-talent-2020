import React from 'react'
import styled from 'styled-components'
import ReactGA from 'react-ga'
import {Navigation} from '../components'

if (typeof window !== 'undefined') ReactGA.pageview(location.pathname)

const InterestSelect = ({className}) => (
  <fieldset className={className}>
    <legend className="label select__title">Select Interest:</legend>
    <label className="label select__label">
      <input
        className="select__checkbox"
        type="checkbox"
        name="interest"
        value="dev"
      />
      <span className="select__control"></span>
      Dev
    </label>
    <label className="label select__label">
      <input
        className="select__checkbox"
        type="checkbox"
        name="interest"
        value="ux"
      />
      <span className="select__control"></span>
      UX
    </label>
    <label className="label select__label">
      <input
        className="select__checkbox"
        type="checkbox"
        name="interest"
        value="ui"
      />
      <span className="select__control"></span>
      UI
    </label>
    <label className="label select__label">
      <input
        className="select__checkbox"
        type="checkbox"
        name="interest"
        value="dm"
      />
      <span className="select__control"></span>
      DM
    </label>
  </fieldset>
)

const ContactPage = styled.main`
  --spacing-v: 1.25rem;
  --spacing-v--s: 0.5rem;
  --spacing-h: 3.5rem;
  --spacing-h--s: 0.3rem;
  --color-red: #e2231a;
  --color-dark-red: #c10909;
  --color-white: #fff;
  --color-black: #000;
  --color-grey: #808285;

  // font-size: 22px;
  line-height: 1.25;
  height: 100vh;

  .site-layout {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .header {
    padding: var(--spacing-v) var(--spacing-h);
    background: var(--color-grey);
  }

  .logo {
    position: relative;
    z-index: 999;
    top: 3px;
    width: auto;
    height: 26px;
  }

  @media (min-width: 850px) {
    .header {
      background: transparent;
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  .section__container {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 850px) {
    .section__container {
      height: 100%;
      min-height: 500px;
      flex-direction: row;
    }
  }

  .section__about,
  .section__contact {
    flex-shrink: 0;
    height: 100%;
    min-height: 500px;
    padding: 1rem var(--spacing-h);
  }

  .section__about {
    flex: 1;
    display: flex;
    align-items: flex-start;
    position: relative;
    padding-top: 20%;
    color: #fff;
    padding-right: 10%;
    background: linear-gradient(
        rgba(226, 36, 26, 0.5),
        rgba(226, 36, 26, 0.5)
      ),
      url(https://images.unsplash.com/photo-1531496681078-27dc2277e898?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80)
        no-repeat center / cover;
    overflow-x: hidden;
  }

  .section__contact {
    flex: 1.2;
    margin-top: 3.5rem;
  }

  @media (min-width: 850px) {
    .section__contact {
      margin-top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 750px;
    }
    .section__about {
      min-height: 750px;
    }
  }

  .title {
    margin: var(--spacing-v) 0;
    font-size: 2.2rem;
  }

  .title--mobile {
    margin: calc(2 * var(--spacing-v)) 0;
    text-align: center;
  }

  .title--desktop {
    margin-top: 2rem;
    font-size: 2.2rem;
  }

  @media (min-width: 850px) {
    .title--desktop {
      margin-top: 10vh;
      font-size: 60px;
    }
  }

  .contact-form,
  .section__about-content {
    max-width: 520px;
    margin: 0 auto;
  }

  .label,
  .input,
  .button {
    font-size: 1rem;
  }

  .label--block {
    display: inline-block;
    width: 100%;
    margin-bottom: calc(2 * var(--spacing-v));
  }

  .input {
    width: 100%;
    margin-top: var(--spacing-v--s);
    background-color: transparent;
    color: var(--color-black);
    border-top: 0;
    border-right: 0;
    border-left: 0;
    border-bottom: 1px solid var(--color-black);
    border-radius: 0;
  }

  .input:placeholder-shown {
    border-color: var(--color-black) !important;
  }

  .input:invalid {
    border-color: var(--color-red);
    outline: none;
    box-shadow: none;
  }

  .select__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: calc(2 * var(--spacing-v));
    padding-bottom: var(--spacing-v--s);
    border: none;
    background-color: #fff;
    padding: 1rem;
    border-radius: 3px;
    color: #000;
    min-height: 3rem;
    width: 150%;

    padding: calc(var(--spacing-v) * 2);
  }

  .select__container--desktop {
    display: none;
  }

  .select__title {
    width: 100%;
    padding-top: 5.5rem;
    margin-bottom: -1rem;
    font-size: 20px;
    font-weight: 300;
  }

  .select__label {
    white-space: nowrap;
    font-size: 20px;
    font-weight: 300;
    line-height: 2.5;
  }

  .select__checkbox {
    position: absolute;
    top: -999rem;
    left: -999rem;
  }

  input:placeholder-shown + .sneaky-label {
    position: relative;
    top: 35px;
    color: #777;
    transition: all 0.3s ease-in-out;
  }

  .label .sneaky-label {
    top: 0;
    color: black;
    font-size: 1rem;
  }

  .phone-confidential {
    font-size: 10px;
    font-weight: 300;
  }

  .select__control {
    --size: 0.7rem;
    display: inline-block;
    width: var(--size);
    height: var(--size);
    border: 1px solid var(--color-black);
    position: relative;
    top: -1px;
    margin-right: calc(var(--spacing-h--s) * 2);
  }

  .select__checkbox:focus + .select__control {
    border-color: var(--color-red);
  }

  .select__checkbox:checked + .select__control {
    background-color: var(--color-black);
  }

  .paragraph {
    display: inline-block;
    margin-top: var(--spacing-v);
    font-size: 20px;
    font-weight: 700;
    line-height: 1.6;
  }

  .button {
    margin: var(--spacing-v) 0;
    padding: 0.5rem 2.5rem;
    border: none;
    border-radius: 0.1rem;
    color: var(--color-white);
    font-weight: 700;
    cursor: pointer;

    transition: background-color 0.4s ease-in-out;
    background-color: var(--color-red);
  }

  .button:focus,
  .button:hover {
    background-color: var(--color-dark-red);
  }

  .bold {
    font-weight: 700;
  }

  .bold--desktop {
    font-weight: 300;
  }

  .center {
    width: 100%;
    text-align: center;
  }

  .desktop-only {
    display: none;
  }

  @media (min-width: 850px) {
    .select__container {
      flex-direction: row;
      width: 100%;
      padding-left: 0;
      padding: 0.75rem 0 1rem 0;
    }

    .select__container--desktop {
      display: flex;
    }

    .section__about-content {
      position: absolute;
      top: 80px;
      padding-right: 50px;
    }

    .select__title {
      padding-top: 0;
      margin-bottom: 0;
      font-size: 1rem;
      font-weight: initial;
    }

    .select__control {
      top: 0.75px;
    }

    .select__label {
      font-size: 1rem;
      font-weight: initial;
      line-height: 2;
    }

    .mobile-only {
      display: none;
    }

    .desktop-only {
      display: initial;
    }

    .bold--desktop {
      font-weight: 700;
    }
  }
`

export default () => (
  <>
    <ContactPage className="site-layout">
      <Navigation />
      <form
        className="section__container"
        method="POST"
        action="https://formspree.io/xrgedrgb"
      >
        <section className="section__about">
          <div className="section__about-content">
            <h1 className="title title--desktop bold">
              Connect with the RED Talent
            </h1>

            <p className="paragraph bold bold--desktop">
              Save a spot and tell us more about the skills you are
              looking for. We will send you relevant information to
              make this process more efficient and effective for you
              or your company.
            </p>

            <InterestSelect className="select__container mobile-only" />
          </div>
        </section>

        <section className="section__contact">
          <div className="contact-form">
            <InterestSelect className="select__container select__container--desktop" />

            <label className="label label--block">
              <span className="sneaky-label">Full Name</span>
              <input
                placeholder=" "
                className="input"
                type="text"
                name="name"
                required
              />
            </label>

            <label className="label label--block">
              <span className="sneaky-label">Email</span>
              <input
                placeholder=" "
                className="input"
                type="email"
                name="_replyto"
                required
              />
            </label>

            <label className="label label--block">
              <span className="sneaky-label">Company (Optional)</span>
              <input className="input" type="text" name="company" />
            </label>

            <label className="label label--block">
              <span className="sneaky-label">
                Phone Number (Optional)
              </span>
              <input
                className="input"
                type="tel"
                name="phone"
                pattern="^\+?\d{0,13}"
              />
              <span className="phone-confidential">
                Your phone number is kept confidential and not shared
                with others
              </span>
            </label>

            <div className="center">
              <button className="button" type="submit">
                Connect
              </button>
            </div>
          </div>
        </section>
      </form>
    </ContactPage>
  </>
)
