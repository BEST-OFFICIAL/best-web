<template>
  <div class="introduce">
    <ProjectIntroduce />
    <ProjectFeature />
    <Rules />
    <ParamsList />
    <Capital class="capital-img" />
    <MineMachine />
    <div class="cooperative">
      <h3>{{ $t("合作伙伴") }}</h3>
      <div class="box">
        <table>
          <tr>
            <td>
              <img src="@/assets/images/logo/1.png" alt="" />
            </td>
            <td>
              <img src="@/assets/images/logo/2.png" alt="" />
            </td>
            <td>
              <img src="@/assets/images/logo/3.png" alt="" />
            </td>
            <td>
              <img src="@/assets/images/logo/4.png" alt="" />
            </td>
            <td>
              <img src="@/assets/images/logo/5.png" alt="" />
              <img src="@/assets/images/logo/6.png" alt="" />
            </td>
            <td>
              <img src="@/assets/images/logo/7.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img src="@/assets/images/logo/8.png" alt="" />
            </td>
            <td>
              <img src="@/assets/images/logo/9.png" alt="" />
            </td>
            <td>
              <img src="@/assets/images/logo/10.png" alt="" />
            </td>
            <td>
              <img src="@/assets/images/logo/11.png" alt="" />
            </td>
            <td>
              <img src="@/assets/images/logo/12.png" alt="" />
            </td>
            <td>
              <img
                style="height: 30px"
                src="@/assets/images/logo/13.png"
                alt=""
              />
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectIntroduce from "../components/ProjectIntroduce";
import ProjectFeature from "../components/ProjectFeature";
import ParamsList from "../components/ParamsList";
import Rules from "../components/Rules";
// import Income from '../components/Income.vue'
// import DevelopLine from '../components/DevelopLine.vue'
import Capital from "@/components/Capital";
import MineMachine from "../components/MineMachine.vue";
export default {
  components: {
    ProjectIntroduce,
    ProjectFeature,
    ParamsList,
    Rules,
    // Income,
    // DevelopLine,
    Capital,
    MineMachine,
  },
};
</script>

<style lang="scss" scoped>
.capital-img {
  margin: 0 auto;
}
.cooperative {
  h3 {
    text-align: center;
    font-weight: 500;
    font-size: 36px;
    line-height: 50px;
    color: #fff;
  }
  .box {
    overflow-x: auto;
    margin: 40px auto 80px;
    table {
      width: 1200px;
    }
    td {
      padding: 20px 0;
      img:nth-child(2) {
        margin-left: 30px;
      }
    }
  }
  img {
    height: 40px;
  }
}

@media screen and (max-width: 745px) {
  .cooperative {
    margin-top: 0.4rem;
    .box {
      margin-top: 0.4rem;
      padding-left: 20px;
    }
  }
}
</style>
