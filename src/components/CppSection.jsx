const cppCode = `#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> skills = {70, 70, 70};

    for (int skill : skills) {
        cout << skill << "% ready to build" << endl;
    }

    return 0;
}`

function CppSection() {
  return (
    <section className="cpp-section" id="cpp">
      <div className="cpp-copy">
        <span className="section-kicker">02 / Code & logic</span>
        <h2>Built with<br /><em>curiosity.</em></h2>
        <p>I enjoy turning ideas into reliable solutions. C++ keeps my thinking sharp through structure, logic, and problem solving.</p>
      </div>
      <div className="code-window" aria-label="C++ code example">
        <div className="code-window-bar">
          <span className="code-dot red" />
          <span className="code-dot yellow" />
          <span className="code-dot green" />
          <span className="code-file">main.cpp</span>
        </div>
        <pre><code>{cppCode}</code></pre>
      </div>
    </section>
  )
}

export default CppSection
