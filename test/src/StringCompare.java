public class StringCompare {
    private String first;
    private String second;

    public String getFirst() {
        return first;
    }

    public void setFirst(String first) {
        this.first = first;
    }

    public String getSecond() {
        return second;
    }

    public void setSecond(String second) {
        this.second = second;
    }
}

class Util {
    public String compare(StringCompare stringCompare) {
        if ((stringCompare.getFirst().length() + stringCompare.getSecond().length()) > 10) {
            return null;
        }

        return stringCompare.getSecond();
    }
}
