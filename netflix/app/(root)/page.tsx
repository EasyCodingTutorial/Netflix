import styles from "./page.module.css";

// For Root Components
import Button from "./_components/Button/Button";
import CustomRight from "./_components/Custom/CustomRight";
import CustomLeft from "./_components/Custom/CustomLeft";
import ImageCustom from "./_components/Custom/ImageCustom";

export default function Home() {
  return (
    <>

      <section className={styles.Home}>

        <div className={styles.HomeContent}>
          <h6>Unlimited movies, TV shows and more</h6>
          <h5>watch anywhere. Cancel anytime</h5>
          <h4>Ready to watch? Enter your email to create or restart your membership</h4>

          <div className={styles.InputBox}>
            <input type="text" placeholder="Email Address" />
            <Button LinkText="Get Started" LinkTo="" />
          </div>
        </div>

      </section>

      {/* For Custom */}
      <CustomRight />
      <ImageCustom />
      <CustomLeft />







    </>
  );
}
