<template>
  <header>
    <div>
      <img alt="Delta logo" src="../../assets/logo.svg" width="150" height="50" />
      <router-link to="/">
        <img src="../../../public/favicon.ico" />
        <span>HOME</span>
      </router-link>
      <router-link to="/user-management-portal">
        <img src="../../../public/favicon-react.ico" />
        USER MANAGEMENT PORTAL
      </router-link>
    </div>
    <div>
      <slot name="header-content" />
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  align-items: center;
  border: var(--border-width) solid var(--main-color);
  background-color: var(--brand-color);
  color: var(--font-main-color);
  display: flex;
  height: var(--header-height);
  justify-content: space-between;
  padding: 10px;

  > div {
    &:first-of-type {
      align-items: end;
      display: flex;
      gap: 15px;

      > img {
        filter: brightness(0) invert(1);
        margin-right: 10px;
      }

      a {
        color: var(--font-main-color);

        img {
          height: 10px;
          margin-right: 5px;
        }
      }
    }

    &:last-of-type {
      align-items: center;
      display: flex;
      justify-content: end;
      gap: 10px;
    }
  }
}
</style>
