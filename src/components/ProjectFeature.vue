<template>
  <div class="project-feature">
    <div class="features" id="features">
      <Title>{{$t('项目特点')}}</Title>
      <ul>
        <li>
          <img
            data-scroll="toggle(.fromTopIn, .fromTopOut)"
            src="~@/assets/images/01.png"
            alt=""
          />
          <h3 data-scroll="toggle(.fromTopIn, .fromTopOut)" class="title-bg">
            {{$t('顶级矿机')}}
          </h3>
          <p data-scroll="toggle(.fromTopIn, .fromTopOut)">
            {{$t('顶级矿机描述')}}
          </p>
        </li>
        <li>
          <img
            data-scroll="toggle(.fromTopIn, .fromTopOut)"
            src="~@/assets/images/02.png"
            alt=""
          />
          <h3 data-scroll="toggle(.fromTopIn, .fromTopOut)" class="title-bg">
            {{$t('专业矿场')}}
          </h3>
          <p data-scroll="toggle(.fromTopIn, .fromTopOut)">
            {{$t('专业矿场描述')}}
          </p>
        </li>
        <li>
          <img
            data-scroll="toggle(.fromTopIn, .fromTopOut)"
            src="~@/assets/images/03.png"
            alt=""
          />
          <h3 data-scroll="toggle(.fromTopIn, .fromTopOut)" class="title-bg">
            {{$t('便捷挖矿')}}
          </h3>
          <p data-scroll="toggle(.fromTopIn, .fromTopOut)">
            {{$t('便捷挖矿描述')}}
          </p>
        </li>
        <li>
          <img
            data-scroll="toggle(.fromTopIn, .fromTopOut)"
            src="~@/assets/images/04.png"
            alt=""
          />
          <h3 data-scroll="toggle(.fromTopIn, .fromTopOut)" class="title-bg">
            {{$t('灵活低门槛')}}
          </h3>
          <p data-scroll="toggle(.fromTopIn, .fromTopOut)">
            {{$t('灵活低门槛描述')}}
          </p>
        </li>
        <li>
          <img
            data-scroll="toggle(.fromTopIn, .fromTopOut)"
            src="~@/assets/images/05.png"
            alt=""
          />
          <h3 data-scroll="toggle(.fromTopIn, .fromTopOut)" class="title-bg">
            {{$t('数据透明')}}
          </h3>
          <p data-scroll="toggle(.fromTopIn, .fromTopOut)">
            {{$t('数据透明描述')}}
          </p>
        </li>
        <li>
          <img
            data-scroll="toggle(.fromTopIn, .fromTopOut)"
            src="~@/assets/images/06.png"
            alt=""
          />
          <h3 data-scroll="toggle(.fromTopIn, .fromTopOut)" class="title-bg">
            {{$t('一币双挖')}}
          </h3>
          <p data-scroll="toggle(.fromTopIn, .fromTopOut)">
            {{$t('一币双挖描述')}}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title";

export default {
  components: {
    Title
  }
}
</script>

<style lang="scss" scoped>
.title-bg {
  background: linear-gradient(to right, #ffc500, #ff6300);
  -webkit-background-clip: text;
  color: transparent;
  text-align: center;
  min-height: 28px;
}
.features {
  width: 990px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  ul {
    width: 100%;
    margin-top: 88px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;
    li {
      width: 300px;
      background: #181d22;
      box-shadow: 0 2px 23px 0 rgba(0, 0, 0, 0.5);
      border-radius: 17px;
      padding-bottom: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 40px 25px 78px;
      margin-bottom: 68px;
      h3 {
        margin-top: 20px;
        font-size: 24px;
        margin-bottom: 24px;
        font-weight: bold;
      }
      img {
        width: 150px;
      }
      p {
        opacity: 0.87;
        font-size: 14px;
        color: #c0c4d7;
        letter-spacing: 0;
        line-height: 30px;
      }
    }
  }
}
@media screen and (max-width: 750px) {
  .title-bg {
    min-height: auto;
  }
  .features {
    width: 100%;
    padding-top: 0.8rem;
    ul {
      width: 6.7rem;
      margin-top: 0.6rem;
      flex-wrap: wrap;
      li {
        width: 3.15rem;
        border-radius: 0.17rem;
        padding: 0.4rem 0.25rem 0.5rem;
        margin-bottom: 0.5rem;
        h3 {
          margin-top: 0.4rem;
          font-size: 0.3rem;
          margin-bottom: 0.2rem;
        }
        img {
          width: 1.5rem;
        }
        p {
          opacity: 1;
          font-size: 0.24rem;
          color: #d4daf2;
          line-height: 0.46rem;
        }
      }
    }
  }
}
</style>
