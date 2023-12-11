import React from "react";
import { User, UserProps } from ".";

export default {
  title: "Example/User",
  component: User,
};

const Template: React.VFC<UserProps> = (args) => <User {...args} />;

// export const Primary = Template.bind({});
// Primary.args = {
//     /* Fill in your default args here */
// };
