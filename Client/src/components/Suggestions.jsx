import React from "react";
import styled from "styled-components";

export default function Suggestions() {
  return (
    <Wrapper>
      <div className="mb-4">
        <h3 className="post-heading fw-semibold mb-3 ms-lg-3">
          Doaguru.com Suggestions
        </h3>
        <div className="row">
          <div className="col-lg-3 px-md-4 mb-lg-0 mb-3">
            <div className="border border-1 rounded-2 d-flex justify-content-between px-3 py-2 mb-2">
              <span className="fw-semibold">₹ 249,500</span>
              <span className="text-muted">7 hours ago</span>
            </div>
            <div className="card mb-2">
              <img
                src="https://res.cloudinary.com/dsujv9zbq/image/upload/v1698845847/110_ut34vq.jpg"
                alt=""
                width="1000px"
                height="207px"
                className="card-img"
              />
            </div>
            <div className="border border-1 rounded-2 px-3 py-2 mb-2">
              <div>2 Beds2 Baths 1,188 Sq Ft</div>
              <div>350 S Durango Dr Unit 224</div>
              <div>Las Vegos, NV 89145</div>
            </div>
          </div>
          <div className="col-lg-3 px-md-4 mb-lg-0 mb-3">
            <div className="border border-1 rounded-2 d-flex justify-content-between px-3 py-2 mb-2">
              <span className="fw-semibold">₹ 249,500</span>
              <span className="text-muted">7 hours ago</span>
            </div>
            <div className="card mb-2">
              <img
                src="https://res.cloudinary.com/dsujv9zbq/image/upload/v1698845847/110_ut34vq.jpg"
                alt=""
                width="1000px"
                height="207px"
                className="card-img"
              />
            </div>
            <div className="border border-1 rounded-2 px-3 py-2 mb-2">
              <div>2 Beds2 Baths 1,188 Sq Ft</div>
              <div>350 S Durango Dr Unit 224</div>
              <div>Las Vegos, NV 89145</div>
            </div>
          </div>
          <div className="col-lg-3 px-md-4 mb-lg-0 mb-3">
            <div className="border border-1 rounded-2 d-flex justify-content-between px-3 py-2 mb-2">
              <span className="fw-semibold">₹ 249,500</span>
              <span className="text-muted">7 hours ago</span>
            </div>
            <div className="card mb-2">
              <img
                src="https://res.cloudinary.com/dsujv9zbq/image/upload/v1698845847/110_ut34vq.jpg"
                alt=""
                width="1000px"
                height="207px"
                className="card-img"
              />
            </div>
            <div className="border border-1 rounded-2 px-3 py-2 mb-2">
              <div>2 Beds2 Baths 1,188 Sq Ft</div>
              <div>350 S Durango Dr Unit 224</div>
              <div>Las Vegos, NV 89145</div>
            </div>
          </div>
          <div className="col-lg-3 px-md-4 mb-lg-0 mb-3">
            <div className="border border-1 rounded-2 d-flex justify-content-between px-3 py-2 mb-2">
              <span className="fw-semibold">₹ 249,500</span>
              <span className="text-muted">7 hours ago</span>
            </div>
            <div className="card mb-2">
              <img
                src="https://res.cloudinary.com/dsujv9zbq/image/upload/v1698845847/110_ut34vq.jpg"
                alt=""
                width="1000px"
                height="207px"
                className="card-img"
              />
            </div>
            <div className="border border-1 rounded-2 px-3 py-2 mb-2">
              <div>2 Beds2 Baths 1,188 Sq Ft</div>
              <div>350 S Durango Dr Unit 224</div>
              <div>Las Vegos, NV 89145</div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .post-heading {
    @media only screen and (max-width: 768px) {
      font-size: 20px;
      text-align: center;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 20px;
    }
  }

  h3 {
    font-family: "Playpen Sans", cursive;
  }
`;
