#region Using directives
using Blazorise;
using Microsoft.AspNetCore.Components;
#endregion

namespace ThemeApp
{
    public partial class ThemeCustomizer : ComponentBase
    {
        #region Members
        #endregion

        #region Constructors
        #endregion

        #region Methods
        private void OnSelectedTabChanged( string name )
        {
            SelectedTab = name;
        }
        #endregion

        #region Properties
        [CascadingParameter] public Theme Theme { get; set; }
        private string SelectedTab { get; set; } = "General";
        #endregion
    }
}