"use client";
import React from "react";
import { Switch } from "@nextui-org/switch";

import { useTheme } from "@/components/context";

const ToggleTheme: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Switch
      title="Toggle theme"
      checked={theme === "dark"}
      color="secondary"
      onChange={toggleTheme}
      aria-label="Toggle theme"
      thumbIcon={({ isSelected }) =>
        isSelected ? (
          <span className="material-icons-outlined text-2xl text-slate-950">
            dark_mode
          </span>
        ) : (
          <span className="material-icons-outlined text-2xl text-slate-950">
            light_mode
          </span>
        )
      }
    />
  );
};

export default ToggleTheme;
