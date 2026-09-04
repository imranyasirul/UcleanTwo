
import HeadingClone from "../../common/HeadingClone";
import SubHeadingW from "../../common/SubHeadingW";
import Container from "../../ui/Container";

const Customer = () => {
  return (
    <section className="pt-60">
      <Container>
        <div className="customerHeading pt-15 flex flex-col gap-3 items-center">
          <SubHeadingW text="Testimonials"/>
          <HeadingClone text="Our Happy Customers"/>
        </div>
        <div className="customerReviewWrap">
            
        </div>
      </Container>
    </section>
  );
};

export default Customer;
