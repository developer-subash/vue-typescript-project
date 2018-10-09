import Test from "../_components/test.vue";
import Hello from "../_components/Hello.vue";

export default [
  {
    path: "test",
    name: "test",
    component: Test,

    redirect: { name: "test-login" },
    children: [
      {
        path: "tests",
        name: "test-login",
        component: Test
      },
      {
        path: "Hello",
        name: "test-welcome",
        component: Hello
      }
    ]
  }
];
