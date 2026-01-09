#!/bin/bash

# Script to install all shadcn/ui components
# This script installs all available components from shadcn/ui

echo "Installing all shadcn/ui components..."
echo "This may take a few minutes..."
echo ""

# List of all available shadcn/ui components
# Removed components that don't exist in the registry: combobox, data-table, date-picker, field, input-group, item, native-select, typography
components=(
  "accordion"
  "alert-dialog"
  "alert"
  "aspect-ratio"
  "avatar"
  "badge"
  "breadcrumb"
  "button-group"
  "button"
  "calendar"
  "card"
  "carousel"
  "chart"
  "checkbox"
  "collapsible"
  "command"
  "context-menu"
  "dialog"
  "drawer"
  "dropdown-menu"
  "empty"
  "form"
  "hover-card"
  "input-otp"
  "input"
  "kbd"
  "label"
  "menubar"
  "navigation-menu"
  "pagination"
  "popover"
  "progress"
  "radio-group"
  "resizable"
  "scroll-area"
  "select"
  "separator"
  "sheet"
  "sidebar"
  "skeleton"
  "slider"
  "sonner"
  "spinner"
  "switch"
  "table"
  "tabs"
  "textarea"
  "toast"
  "toggle-group"
  "toggle"
  "tooltip"
)

# Counter for success/failure
success=0
failed=0
failed_components=()

# Install each component
for component in "${components[@]}"; do
  echo "Installing $component..."
  if npx shadcn@latest add "$component" --yes > /dev/null 2>&1; then
    ((success++))
    echo "✅ $component installed"
  else
    # Try without --yes flag (some versions may not support it)
    if npx shadcn@latest add "$component" > /dev/null 2>&1; then
      ((success++))
      echo "✅ $component installed"
    else
      ((failed++))
      failed_components+=("$component")
      echo "⚠️  $component may have failed (you may need to install manually)"
    fi
  fi
done

echo ""
echo "=========================================="
echo "Installation complete!"
echo "✅ Attempted to install: ${#components[@]} components"
if [ $failed -gt 0 ]; then
  echo "⚠️  Some components may have failed: $failed"
  echo "Failed components: ${failed_components[*]}"
  echo ""
  echo "You can try installing failed components individually:"
  for component in "${failed_components[@]}"; do
    echo "  npx shadcn@latest add $component"
  done
fi
echo "=========================================="
echo ""
echo "Components are available in src/components/ui/"
